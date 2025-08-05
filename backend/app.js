import mysql from "mysql2";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tienda",
});

conection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("conexion corecta ");
  }
});

app.post("/login", (request, response) => {
  const { correo, clave } = request.body;
  const sql = "SELECT * FROM usuarios WHERE correo = ? AND password_user = ?";
  conection.query(sql,[correo, clave], (error, resultado) => {
    if (error) {
      return response.status(500).json(false);
    }
    if (resultado.length > 0) {
      response.json(true);
    } else {
      response.json({message:'te falta cañaña'})
      ;
    }
  });
});

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log("api corriendo en el 3000");
});
