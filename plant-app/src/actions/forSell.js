import { API_URL } from "./constants"

export const getForSellPlants = (successCallback) => {
  fetch(`${API_URL}/forSell`)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      successCallback(data);
    })
    .catch(err => console.log(err));
};

export const getPlantDetails = (id, successCallback) => {
  fetch(`${API_URL}/forSell/${id}`)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      successCallback(data);
    })
    .catch(err => console.log(err));
};

export const deleteBoughtPlant = (id) => {
  return fetch(`${API_URL}/forSell/${id}`, {
    method: 'DELETE',
  })
    .catch(err => console.log(err));
};

export const addPlantForSell = (values) => {
  return fetch(`${API_URL}/forSell`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(values),
  })
    .catch(err => console.log(err));
};