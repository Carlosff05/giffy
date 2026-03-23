const ENDPOINT = 'http://localhost:5227'

export default function loginService ({username, password}) {
    console.log(username)
    console.log(password)
    return fetch(`${ENDPOINT}/api/Clientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => {
      console.log(res)
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    })
    .then(res => {
      console.log(res)
      console.log(JSON.stringify({username, password}))
      const { jwt } = res
      return jwt
    })
}