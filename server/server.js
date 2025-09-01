const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false },
});

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000, httpOnly: true },
  })
);

db.connect((err) => {
  if (err) return console.error("DB connection failed:", err);
  console.log("Connected to MySQL!");
});

app.post("/Register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Nevyplnené polia" });

  const hashed = bcrypt.hashSync(password, 10);

  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) return res.status(500).json({ error: "DB error" });
      if (results.length > 0)
        return res.status(400).json({ error: "Username exists" });

      db.query(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, hashed],
        (err) => {
          if (err)
            return res.status(500).json({ error: "Registration failed" });
          res.json({
            message: "Používateľ úspešne zaregistrovaný!",
            redirect: "/Login",
            registered: 1,
          });
        }
      );
    }
  );
});
// Login endpoint
app.post("/Login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ error: "Nevyplnené polia" });


  db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
    if (err) return res.status(500).json({ error: "DB error" });
    if (results.length === 0) return res.status(401).json({ error: "Používateľ nenájdený" });

    const user = results[0];


    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) return res.status(401).json({ error: "Nesprávne heslo" });

    req.session.userId = user.id;
    req.session.username = user.username;

    res.json({
      message: "Prihlásenie úspešné!",
      loggedIn: true,
      user: { id: user.id, username: user.username }
    });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
