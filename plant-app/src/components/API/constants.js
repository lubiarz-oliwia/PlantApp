const API_URL = "http://localhost:3000";

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


export const getSoldPlants = (successCallback) => {
    fetch(`${API_URL}/sold`)
    .then(r => r.json())
    .then(data => {
      if (data.error === false && typeof successCallback === "function") {
        successCallback(data.data);
      }
    })
    .catch(err => console.log(err));
};

export const getBoughtPlants = (successCallback) => {
  fetch(`${API_URL}/bought`)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      successCallback(data);
    })
    .catch(err => console.log(err));
};

export const addBoughtPlants = (data) => {
  return fetch(`${API_URL}/bought`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data),
  })
  .catch(err => console.log(err));
};


