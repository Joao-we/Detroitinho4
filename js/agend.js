const API_BASE = "/api/agendamentos";

const form = document.querySelector(".form-servico");

// Função para enviar agendamento
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Pega os valores do formulário
  const data = {
    cliente: form.querySelector('input[type="text"]').value,
    telefone: form.querySelector('input[type="tel"]')?.value || "",
    servico: form.querySelector('select:nth-of-type(1)').value,
    profissional: form.querySelector('select:nth-of-type(2)').value,
    data: form.querySelector('input[type="date"]').value,
    hora: form.querySelector('select:nth-of-type(3)').value,
    observacoes: form.querySelector('textarea[name="mensagem"]').value || ""
  };

  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Erro ao enviar agendamento");

    alert("Agendamento realizado com sucesso!");
    form.reset();
  } catch (err) {
    console.error(err);
    alert("Erro ao realizar agendamento. Tente novamente.");
  }
});
