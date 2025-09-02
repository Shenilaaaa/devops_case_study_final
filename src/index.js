const express = require("express");
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
