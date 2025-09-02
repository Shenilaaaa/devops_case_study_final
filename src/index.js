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
        <title>Shenila DevOps Case Study 2</title>
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
        </style>
      </head>
      <body>
        <h1>Shenila – DevOps Case Study 2</h1>
        <h3>Implemented with Terraform, Docker, Ansible, and Jenkins</h3>

        <div class="card">
          <h2>Server Stats</h2>
          <p><b>CPU Load:</b> ${cpuLoad}</p>
          <p><b>Total Memory:</b> ${totalMem} GB</p>
          <p><b>Free Memory:</b> ${freeMem} GB</p>
          <p><b>Uptime:</b> ${uptime} hrs</p>
        </div>

        <p>Server running at port ${port}</p>
        <h3 id="time"></h3>

        <script>
          function updateTime() {
            const now = new Date();
            document.getElementById("time").innerText = now.toLocaleString();
          }
          updateTime(); // show immediately
          setInterval(updateTime, 1000); // update every second
        </script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(\`✅ Server running at http://localhost:\${port}\`);
});
