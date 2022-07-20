const listScore = document.querySelector('.scorelist');

const displayScore = (data) => {
  listScore.innerHTML = '';
  data.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.user} : ${item.score}`;
    listScore.appendChild(li);
  });
};

export default displayScore;
