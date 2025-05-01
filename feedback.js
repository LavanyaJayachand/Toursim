const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost", // Allow only the frontend to access the backend
  methods: "GET, POST"
}));
app.use(express.json());
app.use(express.static('public')); // Serve static files from the "public" folder

// Check if the feedback file exists and initialize it if not
const feedbackFilePath = path.join(__dirname, 'feedback.json');
if (!fs.existsSync(feedbackFilePath)) {
  fs.writeFileSync(feedbackFilePath, JSON.stringify([], null, 2));  // Initialize with empty array
  console.log('Initialized feedback.json with an empty array.');
}

// Serve the feedback form page
app.get('/feedback', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'feedback.html'));
});

// Handle feedback POST request
app.post('/submit-feedback', (req, res) => {
  const { name, place, feedback } = req.body;

  // Load existing feedback data
  let feedbackData = [];
  try {
    const fileData = fs.readFileSync(feedbackFilePath, 'utf8');
    feedbackData = JSON.parse(fileData);
  } catch (err) {
    console.error('Error reading the file:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }

  // Add new feedback
  feedbackData.push({ name, place, feedback });

  // Save updated feedback data
  try {
    fs.writeFileSync(feedbackFilePath, JSON.stringify(feedbackData, null, 2));
    res.json({ message: 'Feedback submitted successfully!' });
  } catch (err) {
    console.error('Error writing to the file:', err);
    return res.status(500).json({ message: 'Error saving feedback data' });
  }
});

// View feedback data in a table
app.get('/view-feedback', (req, res) => {
  let feedbackData = [];
  try {
    const fileData = fs.readFileSync(feedbackFilePath, 'utf8');
    feedbackData = JSON.parse(fileData);
  } catch (err) {
    console.error('Error reading the file:', err);
    return res.status(500).json({ message: 'Error reading feedback data' });
  }

  const rows = feedbackData.map(d =>
    `<tr><td>${d.name}</td><td>${d.place}</td><td>${d.feedback}</td></tr>`
  ).join('');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Feedback Data</title>
      <style>
        body { font-family: sans-serif; padding: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ccc; padding: 10px; }
        th { background-color: #f2f2f2; }
      </style>
    </head>
    <body>
      <h2>Stored Feedback Data</h2>
      <table>
        <thead><tr><th>Name</th><th>Place</th><th>Feedback</th></tr></thead>
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
