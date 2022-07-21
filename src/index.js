import API_URL from './package/setup.js';
import addScore from './package/fetch.js';
import './style.css';
import renderScores from './package/render.js';

const AddEl = document.querySelector('.form-add');
const btnRefresh = document.querySelector('.btn-refresh');
const { nameInput, scoreInput } = AddEl.elements;

const AddHandler = async (evt) => {
  evt.preventDefault();
  if (!nameInput.value || !scoreInput.value) return;
  await addScore({ user: nameInput.value, score: +scoreInput.value });
  nameInput.value = '';
  // scoreInput.value = '';
};

const renderFromAPI = async () => {
  const fetchPro = await fetch(API_URL);
  const data = await fetchPro.json();
  renderScores(data.result);
};

AddEl.addEventListener('submit', AddHandler);
btnRefresh.addEventListener('click', renderFromAPI);
