const ENDPOINT = 'http://localhost:5227'

export default function addFav ({id, jwt}) {
    return fetch(`${ENDPOINT}/api/Clientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id, jwt})
  })
    .then(res => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    })
    .then(res => {
      const {favs} = res
      return favs
    })
}