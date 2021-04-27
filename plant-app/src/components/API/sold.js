const API_URL = "http://localhost:3000";

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
