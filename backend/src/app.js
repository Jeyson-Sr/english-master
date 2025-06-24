import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());




// Rutas
app.get("/", (req, res) => {
  res.send("API funcionando correctamente");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await testConnection(); // solo se ejecuta aquí, no siempre que importes pool
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
