const API_BASE = "/api/agendamentos";

const form = document.getElementById("form-agendamento");
const tabela = document.querySelector("#tabela-agendamentos tbody");

// Carregar agendamentos na tabela
async function carregarAgendamentos() {
  tabela.innerHTML = "";
  try {
    const res = await fetch(API_BASE);
    const agendamentos = await res.json();

    agendamentos.forEach(a => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td data-label="Cliente">${a.cliente}</td>
        <td data-label="Telefone">${a.telefone}</td>
        <td data-label="Serviço">${a.servico}</td>
        <td data-label="Profissional">${a.profissional}</td>
        <td data-label="Data">${a.data}</td>
        <td data-label="Hora">${a.hora}</td>
        <td data-label="Observações">${a.observacoes || ""}</td>
        <td data-label="Ações">
          <button class="btn btn-edit" onclick="editarAgendamento(${a.id})">Editar</button>
          <button class="btn btn-delete" onclick="deletarAgendamento(${a.id})">Excluir</button>
        </td>
      `;
      tabela.appendChild(tr);
    });
  } catch (err) {
    console.error(err);
  }
}

// Adicionar novo agendamento
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    form.reset();
    carregarAgendamentos();
  } catch (err) {
    console.error(err);
  }
});

// Deletar agendamento
async function deletarAgendamento(id) {
  if (!confirm("Deseja realmente excluir este agendamento?")) return;
  try {
    await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
    carregarAgendamentos();
  } catch (err) {
    console.error(err);
  }
}

// Editar agendamento (preenche o formulário)
async function editarAgendamento(id) {
  try {
    const res = await fetch(API_BASE);
    const agendamentos = await res.json();
    const a = agendamentos.find(x => x.id === id);
    if (!a) return alert("Agendamento não encontrado.");

    form.cliente.value = a.cliente;
    form.telefone.value = a.telefone;
    form.servico.value = a.servico;
    form.profissional.value = a.profissional;
    form.data.value = a.data;
    form.hora.value = a.hora;
    form.observacoes.value = a.observacoes || "";

    // Remove o antigo ao salvar
    deletarAgendamento(id);
  } catch (err) {
    console.error(err);
  }
}

// Expor funções globalmente para HTML
window.deletarAgendamento = deletarAgendamento;
window.editarAgendamento = editarAgendamento;

// Carregar ao abrir a página
window.addEventListener("DOMContentLoaded", carregarAgendamentos);
