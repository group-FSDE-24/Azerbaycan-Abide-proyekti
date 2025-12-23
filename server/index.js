const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

/* =========================
   30 Azərbaycan abidəsi
========================= */
const monuments = require("./monuments");

/* =========================
   ROUTES
========================= */

/* 🔍 Axtarış + bütün abidələr */
app.get("/api/monuments", (req, res) => {
  const { search } = req.query;

  if (search) {
    const result = monuments.filter(m =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.city.toLowerCase().includes(search.toLowerCase())
    );
    return res.json(result);
  }

  res.json(monuments);
});

/* 📄 ID ilə oxu */
app.get("/api/monuments/:id", (req, res) => {
  const monument = monuments.find(m => m.id === Number(req.params.id));
  if (!monument) return res.status(404).json({ message: "Abidə tapılmadı" });
  res.json(monument);
});

/* ➕ Abidə əlavə et */
app.post("/api/monuments", (req, res) => {
  const { name, year, description, city, image } = req.body;

  const newMonument = {
    id: monuments.length + 1,
    name,
    year,
    description,
    city,
    image
  };

  monuments.push(newMonument);
  res.status(201).json(newMonument);
});

/* ✏️ Abidə yenilə */
app.put("/api/monuments/:id", (req, res) => {
  const index = monuments.findIndex(m => m.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Abidə tapılmadı" });

  monuments[index] = {
    ...monuments[index],
    ...req.body
  };

  res.json(monuments[index]);
});

/* ❌ Abidə sil */
app.delete("/api/monuments/:id", (req, res) => {
  monuments = monuments.filter(m => m.id !== Number(req.params.id));
  res.json({ message: "Abidə silindi" });
});

/* ========================= */

app.listen(PORT, () => {
  console.log(`✅ Server işləyir: http://localhost:${PORT}`);
});
