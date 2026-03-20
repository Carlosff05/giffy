const ENDPOINT = 'http://localhost:5227'

export default function loginService ({nombre, contrasenna}) {
    return fetch(`${ENDPOINT}/api/Clientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre, contrasenna })
  })
    .then(res => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    })
    .then(res => {
      const { jwt } = res
      return jwt
    })
}