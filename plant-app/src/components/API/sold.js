const API_URL = "http://localhost:3000";

export const getSoldPlants = (successCallback) => {
  fetch(`${API_URL}/sold`)
  .then(r => r.json())
  .then(data => {
    console.log(data);
    successCallback(data);
  })
  .catch(err => console.log(err));
};
