/* eslint-disable import/extensions */

import API_URL from './working.js';

const postData = async (score) => {
  await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};

export default postData;
