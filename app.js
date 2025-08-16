const input = document.getElementById("nomeInput");
const addBtn = document.getElementById("addBtn");
const drawBtn = document.getElementById("drawBtn");
const listaNomes = document.getElementById("listaNomes");
const resultado = document.getElementById("resultado");

let nomes = [];

// Adicionar nome
addBtn.addEventListener("click", () => {
  const nome = input.value.trim();
  if (nome && !nomes.includes(nome)) {
    nomes.push(nome);

    const li = document.createElement("li");
    li.textContent = nome;
    listaNomes.appendChild(li);

    input.value = "";
    input.focus();
  }
});

// Sortear amigo
drawBtn.addEventListener("click", () => {
  if (nomes.length === 0) {
    resultado.textContent = "Adicione pelo menos um nome!";
    resultado.style.color = "red";
    return;
  }

  const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
  resultado.textContent = `🎉 Seu amigo secreto é: ${sorteado} 🎁`;
  resultado.style.color = "green";
});
