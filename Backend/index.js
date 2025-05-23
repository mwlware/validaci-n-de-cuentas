require('dotenv').config();
const express = require('express');
const cors = require('cors');
const validateRoutes = require('./routes/validate');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', validateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 