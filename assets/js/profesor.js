function mostrarSeccion(seccion) {
  const contenido = document.getElementById("contenido");

  switch(seccion) {
    case "laboratorios":
      contenido.innerHTML = `
        <h2>📂 Subir Laboratorios</h2>
        <form>
          <label>Seleccionar archivo:</label><br>
          <input type="file"><br><br>
          
          <label>Aula:</label><br>
          <select>
            <option>-- Seleccionar Aula --</option>
            <option>101</option>
            <option>102</option>
          </select><br><br>

          <label>Curso:</label><br>
          <select>
            <option>-- Seleccionar Curso --</option>
            <option>Física</option>
            <option>Química</option>
          </select><br><br>

          <button type="submit">Subir</button>
        </form>
      `;
      break;

    case "verDelegados":
      contenido.innerHTML = `
        <h2>👤 Delegados del Aula</h2>
        <table>
          <tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Aula</th><th>Curso</th><th>Correo</th></tr>
          <tr><td>1</td><td>Juan</td><td>Pérez</td><td>101</td><td>Física</td><td>juan@example.com</td></tr>
          <tr><td>2</td><td>María</td><td>López</td><td>102</td><td>Química</td><td>maria@example.com</td></tr>
        </table>
      `;
      break;

    case "registrarDelegado":
      contenido.innerHTML = `
        <h2>📝 Registrar Delegado</h2>
        <form>
          <label>ID Alumno:</label><br>
          <input type="text"><br><br>

          <label>Nombre:</label><br>
          <input type="text"><br><br>

          <label>Apellido:</label><br>
          <input type="text"><br><br>

          <label>Aula:</label><br>
          <input type="text"><br><br>

          <label>Curso:</label><br>
          <select>
            <option>-- Seleccionar Curso --</option>
            <option>Física</option>
            <option>Química</option>
          </select><br><br>

          <button type="submit">Registrar</button>
        </form>
      `;
      break;

    case "solicitudes":
      contenido.innerHTML = `
        <h2>📨 Solicitudes de Delegados</h2>
        <table>
          <tr><th>Fecha</th><th>Delegado</th><th>Aula</th><th>Curso</th><th>Solicitud</th><th>Estado</th></tr>
          <tr><td>25/09/2025</td><td>Juan Pérez</td><td>101</td><td>Física</td><td>Extensión de entrega</td><td>Pendiente</td></tr>
          <tr><td>26/09/2025</td><td>María López</td><td>102</td><td>Química</td><td>Material adicional</td><td>Resuelta</td></tr>
        </table>
      `;
      break;

    default:
      contenido.innerHTML = "<h2>Bienvenido Profesor</h2><p>Seleccione una opción del menú superior.</p>";
  }
}
