import { API_URL } from "./constants"

export const getUserData = (successCallback) => {
  fetch(`${API_URL}/userdata`)
    .then(r => r.json())
    .then(data => {
      successCallback(data[data.length - 1]);
      console.log(data[data.length - 1]);
    })
    .catch(err => console.log(err));
};

export const editUserData = (id, data) => {
  return fetch(`${API_URL}/userdata/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(data),
  })
    .catch(err => console.log(err));
};