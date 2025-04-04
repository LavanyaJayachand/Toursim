const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// POST route to handle login form
app.post('/login', (req, res) => {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
        return res.status(400).send("All fields are required!");
    }

    if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match!");
    }

    // For now, just a simple response
    res.send(`Login successful for email: ${email}`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
