const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Initialize dotenv for environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const _dirname=path.resolve();
// Middleware
app.use(express.json());
app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something broke!'
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
