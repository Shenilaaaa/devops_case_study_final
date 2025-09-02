// src/index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use env port if available

// Basic route
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Case Study 2</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f7f9fc; }
          h1 { color: #2c3e50; }
          p { color: #34495e; }
        </style>
      </head>
      <body>
        <h1>Shenila - DevOps Case Study 2</h1>
        <p>Running on Node.js + Express</p>
        <p>Deployed using Terraform, Docker, Ansible & Jenkins</p>
        <p>✅ CI/CD Pipeline Working!</p>
      </body>
    </html>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
