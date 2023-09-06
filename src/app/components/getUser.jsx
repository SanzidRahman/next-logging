
export default async function getUser(id) {
    const response = await fetch(`http://localhost:3000/api/user/${id}`)
    const data = await response.json()
    return data;
  
}
