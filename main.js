const form = document.getElementById("registro-ucab");
const statusEl = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Mensaje inicial
    statusEl.textContent = "Enviando registro...";
    submitBtn.disabled = true;

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        statusEl.textContent = "✅ Registro enviado correctamente. ¡Gracias!";
        form.reset();
      } else {
        statusEl.textContent =
          "⚠️ Hubo un problema al enviar el formulario. Intenta de nuevo.";
      }
    } catch (error) {
      statusEl.textContent =
        "❌ Error de conexión. Revisa tu internet e inténtalo otra vez.";
    } finally {
      submitBtn.disabled = false;
    }
  });
}
