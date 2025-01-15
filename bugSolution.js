const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Add error handling for non-numeric userId
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});