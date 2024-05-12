import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const AboutUs = () => {
    const [list, setLista] = React.useState([])
    useEffect(() => {
        getData()
    })
    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const employees = await data.json()
        setLista(employees)
    }
    return (
        <div>
            <h3>Lista de Empleados:</h3>

            <ul className="list">
                {
                    /*list.map((user) => (<li className="list-employees" key={user.id}>{user.name} - {user.email}</li>))*/
                }
                {
                    list.map((user) => (<li className="list-employees" key={user.id}><Link className="link" to={`/quienesSomos/${user.id}`}>{user.name} - {user.email}</Link></li>))
                }
            </ul>
        </div>
    )
}
export default AboutUs