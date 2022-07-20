// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
/* eslint-disable import/extensions */
import './styles.css';
import displayScore from './crud.js';
import API_URL from './working.js';
import postData from './display.js';

const formAdd = document.querySelector('#form-add');
const refresh = document.querySelector('#refresh-btn');
const { name, score } = formAdd.elements;

const addScore = (e) => {
  e.preventDefault();
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
