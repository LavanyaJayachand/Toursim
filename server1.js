const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'bookings.json');

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the "public" folder

function readBookings() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function writeBookings(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Serve the booking form at the root ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'booking.html'));  // Adjust this path to your HTML file
});

// Handle booking POST request
app.post('/book', (req, res) => {
  const { name, mobile, place, date } = req.body;

  // Validate input data
  if (!name || !mobile || !place || !date || mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  let bookings = readBookings();
  const bookingId = bookings.length + 1;

  const newBooking = { bookingId, name, mobile, place, date };
  bookings.push(newBooking);
  writeBookings(bookings);

  res.json({
    message: 'Booking confirmed!',
    bookingId
  });
});

// View all bookings in a table
app.get('/view-bookings', (req, res) => {
  const bookings = readBookings();

  if (bookings.length === 0) {
    return res.send('<p>No bookings found yet.</p>');
  }

  const rows = bookings.map(b => `<tr><td>${b.bookingId}</td><td>${b.name}</td><td>${b.mobile}</td><td>${b.place}</td><td>${b.date}</td></tr>`).join('');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Booking Data</title>
      <style>
        body { font-family: sans-serif; padding: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ccc; padding: 10px; }
        th { background-color: #f2f2f2; }
        .del { font-size: 20px; padding: 4px; }
      </style>
    </head>
    <body>
      <h2>Stored Booking Data</h2>
      <table>
        <thead><tr><th>Booking ID</th><th>Name</th><th>Mobile</th><th>Place</th><th>Date</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <button class="del">Clear All</button>

      <script>
        // Add event listener to the "Clear All" button
        document.querySelector('.del').addEventListener('click', function() {
          // Send a GET request to the server to clear the data
          fetch('/clear-bookings')
            .then(response => {
              if (response.ok) {
                window.location.reload();  // Reload the page to see the updated data (empty)
              } else {
                alert('Error clearing data');
              }
            })
            .catch(err => {
              console.error('Error:', err);
              alert('Failed to connect to the server.');
            });
        });
      </script>
    </body>
    </html>
  `;

  res.send(html);
});

// Handle "Clear All" bookings data request
app.get('/clear-bookings', (req, res) => {
  const bookings = [];

  try {
    writeBookings(bookings); // Clear the bookings data
    console.log('All bookings cleared successfully!');
    res.redirect('/view-bookings');  // Redirect back to view-bookings page to show empty data
  } catch (err) {
    console.error('Error clearing bookings data:', err);
    return res.status(500).json({ message: 'Error clearing bookings data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
