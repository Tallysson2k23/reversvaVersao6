// Importando e inicializando o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  databaseURL: "SUA_DATABASE_URL",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Referências aos elementos do DOM
const carSelect = document.getElementById('car-select');
const techSelect = document.getElementById('tech-select');
const saveButton = document.getElementById('save-button');

// Adiciona evento de clique no botão Salvar
saveButton.addEventListener('click', () => {
  const selectedCar = carSelect.value;
  const selectedTechnician = techSelect.value;
  const timestamp = new Date().toISOString();

  if (!selectedCar || !selectedTechnician) {
    alert('Por favor, selecione um carro e um técnico antes de salvar.');
    return;
  }

  // Envia os dados para o Firebase
  const reservationsRef = ref(database, 'reservations');
  push(reservationsRef, {
    car: selectedCar,
    technician: selectedTechnician,
    timestamp: timestamp
  })
  .then(() => {
    // Confirmação de sucesso
    alert('Reserva salva com sucesso!');
  })
  .catch((error) => {
    // Tratamento de erro
    console.error('Erro ao salvar reserva:', error);
    alert('Ocorreu um erro ao salvar a reserva. Consulte o console para mais detalhes.');
  });
});
////

const statusMessage = document.getElementById('status-message');
const errorMessage = document.getElementById('error-message');

saveButton.addEventListener('click', () => {
  const selectedCar = carSelect.value;
  const selectedTechnician = techSelect.value;
  const timestamp = new Date().toISOString();

  if (!selectedCar || !selectedTechnician) {
    alert('Por favor, selecione um carro e um técnico antes de salvar.');
    return;
  }

  // Envia os dados para o Firebase
  const reservationsRef = ref(database, 'reservations');
  push(reservationsRef, {
    car: selectedCar,
    technician: selectedTechnician,
    timestamp: timestamp
  })
  .then(() => {
    // Exibe mensagem de sucesso
    statusMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    setTimeout(() => statusMessage.style.display = 'none', 3000); // Oculta após 3 segundos
  })
  .catch((error) => {
    // Exibe mensagem de erro
    console.error('Erro ao salvar reserva:', error);
    statusMessage.style.display = 'none';
    errorMessage.style.display = 'block';
    setTimeout(() => errorMessage.style.display = 'none', 3000); // Oculta após 3 segundos
  });
});
