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

// Serve the view-bookings page that displays all bookings in a table
app.get('/view-bookings', (req, res) => {
  const bookings = readBookings();  // Get the latest bookings from the JSON file
  const rows = bookings.map(d => `
    <tr>
      <td>${d.bookingId}</td>
      <td>${d.name}</td>
      <td>${d.mobile}</td>
      <td>${d.place}</td>
      <td>${new Date(d.date).toLocaleString()}</td>
    </tr>
  `).join('');

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
      <h2>Booking Details</h2>
      <table>
        <thead><tr><th>Booking ID</th><th>Name</th><th>Mobile</th><th>Place</th><th>Date</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <button class="del">Clear All</button>

      <script>
        // Add event listener to the "Clear All" button
        document.querySelector('.del').addEventListener('click', function() {
          // Send a GET request to the server to clear the bookings
          fetch('/clear-bookings')
            .then(response => {
              if (response.ok) {
                // Once the bookings are cleared, reload the page to show the updated (empty) data
                window.location.reload();
              } else {
                alert('Error clearing bookings');
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

// Add a route to fetch all bookings (for API access)
app.get('/bookings', (req, res) => {
  const bookings = readBookings();
  res.json(bookings);
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
