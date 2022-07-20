const scoresEl = document.querySelector('.scores');

export default (scores) => {
  scoresEl.innerHTML = '';
  scores.forEach((score) => {
    const markup = `<li class="score">${score.user}: ${score.score}</li>`;
    scoresEl.insertAdjacentHTML('beforeend', markup);
  });
};
