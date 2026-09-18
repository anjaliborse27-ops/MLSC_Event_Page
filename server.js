// Minimal static file server for local preview.
// Your deployment team can serve this same folder with any static host
// (nginx, Netlify, Apache, IIS, etc.) — this Express server is only for
// running it locally with `npm start`.

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`MLSC PCCOE event pages running at http://localhost:${PORT}`);
});
