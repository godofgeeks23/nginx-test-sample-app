const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
