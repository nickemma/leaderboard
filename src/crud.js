const listScore = document.querySelector('.scorelist');

const displayScore = (data) => {
  listScore.innerHTML = '';
  data.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.user} : ${item.score}`;
    listScore.appendChild(li);
  });
};

// const displayScore = (score) => {
//   listScore.innerHTML = '';
//   score.forEach((users) => {
//     const ul = document.createElement('li');
//     ul.innerHTML = `<li>   ${users.user}  :  ${users.score} </li>`;
//     listScore.insertAdjacentElement('beforeend', ul);
//   });
// };

export default displayScore;
