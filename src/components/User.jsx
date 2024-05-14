import React, { Fragment } from "react"
import { useParams } from "react-router-dom"
import NavB from "./NavB"

const User = () => {
    const { id } = useParams()
    const [employees, setEmployees] = React.useState([])
    React.useEffect(() => {
        getData()
    })
    const getData = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const emp = await data.json()
        setEmployees(emp)
    }
    return (
        <Fragment>
            <header>
                <NavB />
            </header>
            <main>
                <h2>Datos del Empleado</h2>
                <div className="employee">
                    <h3 className="name">{employees.name}</h3>
                    <p className="description">Website: {employees.website} <br /> Username: {employees.username}</p>
                </div>
            </main>
        </Fragment>
    )
}
export default User