CREATE DATABASE IF NOT EXISTS english_master;
USE english_master;

CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS secciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE IF NOT EXISTS ejercicios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  seccion_id INT NOT NULL,
  tipo ENUM('multiple_choice', 'short_answer', 'true_false', 'matching', 'fill_in_blank') NOT NULL,
  pregunta TEXT NOT NULL,
  FOREIGN KEY (seccion_id) REFERENCES secciones(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS opciones_ejercicio (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ejercicio_id INT NOT NULL,
  texto VARCHAR(255) NOT NULL,
  es_correcta BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (ejercicio_id) REFERENCES ejercicios(id) ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS progreso (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  ejercicio_id INT NOT NULL,
  respuesta_usuario VARCHAR(255),
  correcta BOOLEAN,
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (ejercicio_id) REFERENCES ejercicios(id) ON DELETE CASCADE
);
