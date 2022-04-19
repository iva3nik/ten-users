const checkStatusResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`)
  }
  return res.json()
}

export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatusResponse)
}
