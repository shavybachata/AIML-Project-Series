const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const admission = require("./routes/admission");

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

// Import routes
app.use('/', admission);

mongoose.connect('mongodb+srv://shivshivam1k:tD1SS4MpsN5GpCTj@cluster0.aflohgu.mongodb.net/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
