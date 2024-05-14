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
                <div className="container-lista">
                    <h3 className="title-table">Datos del Empleado</h3>
                    <div className="employee">
                        <h3 className="name">{employees.name}</h3>
                        <div className="container-description">
                            <span><b>Usuario:</b> {employees.username}</span>
                            <span><b>Correo:</b> {employees.email}</span>
                            <span><b>Telefono:</b> {employees.phone}</span>
                            <span><b>Website:</b> {employees.website}</span>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
export default User