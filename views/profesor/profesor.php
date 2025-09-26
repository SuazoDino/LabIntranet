<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panel del Profesor</title>
  <link rel="stylesheet" href="assets/css/profesor.css">
</head>
<body>
  <!-- HEADER -->
  <header>
    <div class="logo">
      <img src="images/logo.png" alt="Logo">
    </div>
    <h1>Panel del Profesor</h1>
  </header>

  <!-- MENÚ PRINCIPAL -->
  <nav>
    <button onclick="mostrarSeccion('laboratorios')">📂 Subir Laboratorios</button>
    <button onclick="mostrarSeccion('verDelegados')">👤 Ver Delegados</button>
    <button onclick="mostrarSeccion('registrarDelegado')">📝 Registrar Delegado</button>
    <button onclick="mostrarSeccion('solicitudes')">📨 Ver Solicitudes</button>
  </nav>

  <!-- CONTENIDO PRINCIPAL -->
  <main id="contenido">
    <h2>Bienvenido Profesor</h2>
    <p>Seleccione una opción del menú superior para comenzar.</p>
  </main>

  <!-- FOOTER -->
  <footer>
    <p>© 2025 Laboratorio Intranet</p>
  </footer>

  <script src="assets/js/profesor.js"></script>
</body>
</html>
