const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if email ends with @gmail.com
  console.log('Login attempt:', { email, password });
  console.log('Ends with @gmail.com:', email && email.endsWith('@gmail.com'));
  console.log('Password exists:', !!password);

  if (email && email.endsWith('@gmail.com') && password) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ error: 'Invalid credentials. Use a Gmail account.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});