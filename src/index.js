import './styles.css';
import displayScore from './crud';
import API_URL from './working';
import postData from './display';

const formAdd = document.querySelector('#form-add');
const refresh = document.querySelector('#refresh-btn');
const { name, score } = formAdd.elements;

const addScore = (e) => {
  e.preventDefault();
  if (!name.value || !score.value) return;
  const scoreData = {
    user: name.value,
    score: score.value,
  };
  postData(scoreData);
};

const renderAPI = async () => {
  const fetchData = await fetch(API_URL);
  const data = await fetchData.json();
  displayScore(data.result);
};

formAdd.addEventListener('submit', addScore);
refresh.addEventListener('click', renderAPI);
