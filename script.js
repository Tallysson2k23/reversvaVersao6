// Importando e inicializando o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBzfan0YmyXqZBta-fkopDjTa7z-zdB0NM",
    authDomain: "reserva-de-carros.firebaseapp.com",
    databaseURL: "https://reserva-de-carros-default-rtdb.firebaseio.com",
    projectId: "reserva-de-carros",
    storageBucket: "reserva-de-carros.firebasestorage.app",
    messagingSenderId: "242198935354",
    appId: "1:242198935354:web:3ad94cdfeffb1ccd28c203",
    measurementId: "G-W9Z2XNEBKC"
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

  // Envia os dados para o Firebase
  const reservationsRef = ref(database, 'reservations');
  push(reservationsRef, {
    car: selectedCar,
    technician: selectedTechnician,
    timestamp: timestamp
  })
  .then(() => {
    alert('Reserva salva com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao salvar reserva:', error);
    alert('Erro ao salvar a reserva. Consulte o console.');
  });
});
