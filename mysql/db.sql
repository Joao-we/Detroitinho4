CREATE TABLE agendamentos (
  id SERIAL PRIMARY KEY,
  cliente VARCHAR(100),
  telefone VARCHAR(20),
  servico VARCHAR(50),
  profissional VARCHAR(50),
  data DATE,
  hora TIME,
  observacoes TEXT
);
