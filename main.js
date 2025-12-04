const form = document.getElementById("registro-ucab");
const statusEl = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // LIMPIAR ESTILOS DEL MENSAJE
    statusEl.textContent = "";
    statusEl.className = "status";

    // 👉 VALIDACIÓN DE LA CÉDULA SOLO NÚMEROS
    const cedulaInput = document.getElementById("cedula");
    const cedulaValue = cedulaInput.value.trim();

    if (!/^[0-9]+$/.test(cedulaValue)) {
      statusEl.textContent = "La cédula debe contener solo números.";
      statusEl.className = "status error";
      return; // ❌ Detiene el envío
    }

    // MENSAJE DE PROCESO
    statusEl.textContent = "Enviando registro...";
    statusEl.className = "status";
    submitBtn.disabled = true;

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        statusEl.textContent = "Registro enviado exitosamente! Gracias por formar parte de Hive Running Club.";
        statusEl.className = "status success";
        form.reset();
      } else {
        statusEl.textContent = "Hubo un error al enviar. Intenta nuevamente.";
        statusEl.className = "status error";
      }
    } catch (error) {
      statusEl.textContent = "Error de conexión. Intenta nuevamente.";
      statusEl.className = "status error";
    } finally {
      submitBtn.disabled = false;
    }
  });
}

