const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Route to handle new login data (same as before)
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Create a data object
    const loginData = { email, password };

    // Read existing data
    let existingData = [];
    if (fs.existsSync('data.json')) {
        const fileContent = fs.readFileSync('data.json', 'utf8');
        if (fileContent) existingData = JSON.parse(fileContent);
    }

    // Add new data
    existingData.push(loginData);

    // Save updated data to file
    fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));

    console.log('Saved login data:', loginData);
    res.json({ message: 'Login data saved successfully!' });
});

// Route to get all users (for populating the table)
app.get('/users', (req, res) => {
    let existingData = [];
    if (fs.existsSync('data.json')) {
        const fileContent = fs.readFileSync('data.json', 'utf8');
        if (fileContent) existingData = JSON.parse(fileContent);
    }
    
    // Send the existing users data to the frontend
    res.json(existingData);
});

// Route to update user's password based on email (to modify data)
app.post('/update-user', (req, res) => {
    const { email, password } = req.body;

    // Read the existing data
    let existingData = [];
    if (fs.existsSync('data.json')) {
        const fileContent = fs.readFileSync('data.json', 'utf8');
        if (fileContent) existingData = JSON.parse(fileContent);
    }

    // Find the user by email and update the password
    const userIndex = existingData.findIndex(user => user.email === email);
    if (userIndex !== -1) {
        existingData[userIndex].password = password;  // Update password
        // Save the updated data to file
        fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));
        res.json({ message: 'User password updated successfully!' });
    } else {
        res.status(404).json({ message: 'User not found!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
