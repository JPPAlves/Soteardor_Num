const numberContainer = document.getElementById('numberContainer');
const resetButton = document.getElementById('resetButton');
const downloadPDFButton = document.getElementById('downloadPDFButton');
const sorteador = document.getElementById('sorteador');

// Função para lidar com o clique no número
function selectNumber(event) {
  const selectedNumber = event.currentTarget;

  // Verifique se o número já está selecionado
  if (!selectedNumber.classList.contains('selected')) {
    const playerName = prompt('Por favor, digite seu nome:');

    if (playerName !== null && playerName.trim() !== '') {
      selectedNumber.classList.add('selected');
      const nameElement = selectedNumber.querySelector('.name');
      nameElement.innerHTML = playerName;

      // Armazene as informações no local storage
      const numberIndex = selectedNumber.querySelector('.number').innerHTML;
      localStorage.setItem(`number_${numberIndex}`, playerName);
      localStorage.setItem(`number_${numberIndex}_selected`, true);
    }
  }
}

// Função para lidar com o duplo clique no número
function editNumberStatus(event) {
  const selectedNumber = event.currentTarget;
  const playerName = selectedNumber.querySelector('.name').innerHTML;

  // Confirmação com o usuário
  const shouldClearData = confirm(`Deseja limpar os dados do número ${selectedNumber.querySelector('.number').innerHTML}?`);

  if (shouldClearData) {
    // Se o usuário confirmar, remova os dados
    selectedNumber.classList.remove('selected');
    const nameElement = selectedNumber.querySelector('.name');
    nameElement.innerHTML = '';

    // Remova as informações do local storage
    const numberIndex = selectedNumber.querySelector('.number').innerHTML;
    localStorage.removeItem(`number_${numberIndex}`);
    localStorage.removeItem(`number_${numberIndex}_selected`);
  }
}

// Função para resetar todas as informações
function resetNumbers() {
  const shouldReset = confirm('Você tem certeza que deseja resetar todas as informações? Isso não pode ser desfeito.');

  if (shouldReset) {
    localStorage.clear();
    location.reload();
  }
}

// Função para ordenar os números e nomes e exibir em um relatório
function orderAndDisplayReport() {
  window.location.href = "relatorio/report.html"; // Abra a página do relatório
}

// Função para ordenar os números e nomes e exibir no sorteador
function orderAndDisplaysorteador() {
  window.location.href = "sorteador/sorteador.html"; // Abra a página do sorteador
}

// Crie os números de 1 a 120
for (let i = 1; i <= 120; i++) {
  const numberElement = document.createElement('div');
  numberElement.classList.add('number-container');

  const number = document.createElement('div');
  number.classList.add('number');
  number.innerHTML = i;
  numberElement.appendChild(number);

  const name = document.createElement('div');
  name.classList.add('name');
  const storedName = localStorage.getItem(`number_${i}`);
  name.innerHTML = storedName ? storedName : '';
  numberElement.appendChild(name);

  // Verifique se o número foi selecionado anteriormente ao carregar a página
  const selected = localStorage.getItem(`number_${i}_selected`);
  if (selected) {
    numberElement.classList.add('selected');
  }

  numberElement.addEventListener('click', selectNumber);
  numberElement.addEventListener('dblclick', editNumberStatus);

  numberContainer.appendChild(numberElement);
}

resetButton.addEventListener('click', resetNumbers);
downloadPDFButton.addEventListener('click', orderAndDisplayReport);
sorteador.addEventListener('click', orderAndDisplaysorteador);
