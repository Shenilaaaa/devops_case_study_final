const express = require("express");
const os = require("os");
const app = express();
const port = 3000;

// Random DevOps quotes
const quotes = [const express = require("express");
const os = require("os");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const cpuLoad = os.loadavg()[0].toFixed(2);
  const totalMem = (os.totalmem() / (1024 ** 3)).toFixed(2);
  const freeMem = (os.freemem() / (1024 ** 3)).toFixed(2);
  const uptime = (os.uptime() / 3600).toFixed(2);

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>DevOps Case Study 2</title>
        <style>
          body {
            font-family: "Roboto", sans-serif;
            background: #1e1e2f;
            margin: 0;
            padding: 0;
            color: #f5f5f5;
          }
          header {
            background: #111;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #2980b9;
          }
          header h1 {
            margin: 0;
            font-size: 28px;
            color: #00aaff;
          }
          header p {
            margin: 5px 0 0;
            font-size: 14px;
            color: #ccc;
          }
          .dashboard {
            max-width: 700px;
            margin: 40px auto;
            background: #2c2c3c;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 15px rgba(0,0,0,0.5);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          table, th, td {
            border: 1px solid #444;
          }
          th, td {
            padding: 12px;
            text-align: center;
          }
          th {
            background: #00aaff;
            color: #fff;
          }
          tr:nth-child(even) {
            background: #383850;
          }
          tr:nth-child(odd) {
            background: #2e2e40;
          }
          footer {
            text-align: center;
            margin: 20px;
            font-size: 13px;
            color: #aaa;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>DevOps Case Study 2</h1>
          <p>By Shenila Ansari</p>
        </header>

        <div class="dashboard">
          <h2 style="text-align:center; color:#00aaff;">📊 Server Monitoring Dashboard</h2>
          <table>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>CPU Load</td>
              <td>${cpuLoad}</td>
            </tr>
            <tr>
              <td>Total Memory</td>
              <td>${totalMem} GB</td>
            </tr>
            <tr>
              <td>Free Memory</td>
              <td>${freeMem} GB</td>
            </tr>
            <tr>
              <td>Uptime</td>
              <td>${uptime} hrs</td>
            </tr>
          </table>
          <p id="time" style="text-align:center; font-size:14px; margin-top:15px;"></p>
        </div>

        <footer>
          <p>Deployed with Terraform | Docker | Ansible | Jenkins</p>
          <p>Server running at port ${port}</p>
        </footer>

        <script>
          function updateTime() {
            const now = new Date();
            document.getElementById("time").innerText = "Current Time: " + now.toLocaleString();
          }
          updateTime();
          setInterval(updateTime, 1000);
        </script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(\`✅ Server running at http://localhost:\${port}\`);
});

  "Automate everything, but trust nothing!",
  "Infrastructure as Code is the future 🚀",
  "In DevOps, feedback loops are everything 🔄",
  "Continuous Integration > Occasional Frustration 😅",
  "Cloud + Automation = Magic ✨"
];

app.get("/", (req, res) => {
  const cpuLoad = os.loadavg()[0].toFixed(2);
  const totalMem = (os.totalmem() / (1024 ** 3)).toFixed(2);
  const freeMem = (os.freemem() / (1024 ** 3)).toFixed(2);
  const uptime = (os.uptime() / 3600).toFixed(2);

  // Pick a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>DevOps Dashboard</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            background: #f0f4f9; 
            color: #333; 
            padding: 40px;
          }
          h1 { color: #2c3e50; }
          .card {
            background: white;
            padding: 20px;
            margin: 20px auto;
            width: 400px;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          .quote {
            font-style: italic;
            color: #16a085;
            margin-top: 15px;
          }
        </style>
      </head>
      <body>
        <h1>🚀 DevOps Case Study Project</h1>
        <h3>By Shubhada Kharwante</h3>
        <p>Deployed with Terraform, Docker, Ansible, and Jenkins</p>

        <div class="card">
          <h2>📊 Server Stats</h2>
          <p><b>CPU Load:</b> ${cpuLoad}</p>
          <p><b>Total Memory:</b> ${totalMem} GB</p>
          <p><b>Free Memory:</b> ${freeMem} GB</p>
          <p><b>Uptime:</b> ${uptime} hrs</p>
        </div>

        <div class="card">
          <h2>💡 DevOps Quote</h2>
          <p class="quote">"${randomQuote}"</p>
        </div>

        <p>Server running at port ${port}</p>
        <h3 id="time"></h3>

        <script>
          function updateTime() {
            const now = new Date();
            document.getElementById("time").innerText = "⏰ " + now.toLocaleString();
          }
          updateTime(); // show immediately
          setInterval(updateTime, 1000); // update every second
        </script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
