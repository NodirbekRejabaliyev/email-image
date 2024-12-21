const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/pixel', (req, res) => {
    const email = req.query.email;

    // Log the email open event
    if (email) {
        console.log(`Email opened by: ${email}`);
        fs.appendFileSync('logs.txt', `Email opened by: ${email}\n`);
    }

    // Send the tracking pixel (1x1 transparent image)
    const imgPath = path.resolve(__dirname, 'transparent.png');
    res.sendFile(imgPath);
});

const PORT = 3000; // Change port if necessary
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
