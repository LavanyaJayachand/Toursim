const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
