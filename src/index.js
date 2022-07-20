import API_URL from './config';
import addScore from './crud';
import './style.css';
import renderScores from './views';

const formAddEl = document.querySelector('.form-add');
const btnRefreshEl = document.querySelector('.btn-refresh');
const { nameEl, scoreEl } = formAddEl.elements;

const formAddHandler = async (event) => {
  event.preventDefault();
  if (!nameEl.value || !scoreEl.value) return;
  await addScore({ user: nameEl.value, score: +scoreEl.value });
  nameEl.value = '';
  scoreEl.value = '';
};

const renderFromAPI = async () => {
  const fetchPro = await fetch(API_URL);
  const data = await fetchPro.json();
  renderScores(data.result);
};

formAddEl.addEventListener('submit', formAddHandler);
btnRefreshEl.addEventListener('click', renderFromAPI);
