const API_URL = "http://localhost:3000";


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