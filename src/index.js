// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
/* eslint-disable import/extensions */
import './styles.css';
import displayScore from './display.js';
import API_URL from './working.js';
import getData from './crud.js';

const formAdd = document.querySelector('#form-add');
const refresh = document.querySelector('#refresh-btn');
const { name, score } = formAdd.elements;

const formData = async (event) => {
  event.preventDefault();
  if (!name.value || !score.value) return;
  await getData({ user: name.value, score: score.value });
  name.value = '';
  score.value = '';
};

const renderAPI = async () => {
  const fetchData = await fetch(API_URL);
  const data = await fetchData.json();
  displayScore(data.result);
};

formAdd.addEventListener('submit', formData);
refresh.addEventListener('click', renderAPI);
