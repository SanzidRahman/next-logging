
export default async function getusers() {
    const resposne = await fetch("http://localhost:3000/api/user")
    const data = await resposne.json()
    return data; 
}
