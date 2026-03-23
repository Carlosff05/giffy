const ENDPOINT = 'http://localhost:5227'

export default function register ({username, password}) {
    return fetch(`${ENDPOINT}/api/Clientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  })
    .then(res => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    })
    .then(res => {
      return true
    })
}