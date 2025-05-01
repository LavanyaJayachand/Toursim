const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the "public" folder

// Serve the feedback form page
app.get('/feedback', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'feedback.html'));
});

// Handle feedback POST request
app.post('/submit-feedback', (req, res) => {
    const { name, place, feedback } = req.body;

    // Load existing feedback data
    const filePath = path.join(__dirname, 'feedback.json');
    let feedbackData = [];

    try {
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, 'utf8');
            feedbackData = JSON.parse(fileData);
        }
    } catch (err) {
        console.error('Error reading the file:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }

    // Add new feedback
    feedbackData.push({ name, place, feedback });

    try {
        // Save updated feedback data
        fs.writeFileSync(filePath, JSON.stringify(feedbackData, null, 2));
        res.json({ message: 'Feedback submitted successfully!' });
    } catch (err) {
        console.error('Error writing to the file:', err);
        return res.status(500).json({ message: 'Error saving feedback data' });
    }
});

// View feedback data in a table
app.get('/view-feedback', (req, res) => {
    const filePath = path.join(__dirname, 'feedback.json');

    if (!fs.existsSync(filePath)) {
        return res.send('<p>No feedback found yet.</p>');
    }

    let feedbackData = [];
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
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
      .del {
        font-size: 20px;
        padding: 4px;
      }
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
      <button class="del">Clear All Feedback</button>

      <script>
        // Add event listener to the "Clear All Feedback" button
        document.querySelector('.del').addEventListener('click', function() {
          // Send a GET request to the server to clear the feedback data
          fetch('/clear-feedback')
            .then(response => {
              if (response.ok) {
                // Once the data is cleared, reload the page to see the updated (empty) data
                window.location.reload();
              } else {
                alert('Error clearing feedback data');
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

// Handle "Clear All Feedback" data request
app.get('/clear-feedback', (req, res) => {
    const filePath = path.join(__dirname, 'feedback.json');

    if (fs.existsSync(filePath)) {
        try {
            // Clear the content of the file (set it to an empty array)
            fs.writeFileSync(filePath, JSON.stringify([], null, 2));
            console.log('All feedback cleared successfully!');
            res.redirect('/view-feedback');  // Redirect back to view-feedback to show empty data
        } catch (err) {
            console.error('Error clearing the file:', err);
            return res.status(500).json({ message: 'Error clearing feedback data' });
        }
    } else {
        res.status(404).json({ message: 'Feedback file not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
