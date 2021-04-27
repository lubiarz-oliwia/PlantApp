const API_URL = "http://localhost:3000";


export const getUserData = (successCallback) => {
    fetch(`${API_URL}/userdata`)
      .then(r => r.json())
      .then(data => {
        successCallback(data[0]);
      })
      .catch(err => console.log(err));
  };
  
  export const editUserData = (data) => {
    return fetch(`${API_URL}/userdata`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
    .catch(err => console.log(err));
  };