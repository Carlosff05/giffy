const ENDPOINT = 'http://localhost:5227'

export default function loginService ({username, password}) {
    return fetch(`${ENDPOINT}/api/Clientes/login?Username=${username}&Password=${password}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    },
  })
    .then(res => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    })
    .then(res => {
      const jwt = res
      return jwt
    })
}