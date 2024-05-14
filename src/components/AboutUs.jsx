import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import NavB from "./NavB";
import { ListGroup, ListGroupItem } from "react-bootstrap";



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
        <Fragment>
            <header>
                <NavB />
            </header>
            <main>
                <div className="container-lista">
                    <h3 className="title-table">Lista de Empleados:</h3>
                    <ListGroup>
                        {list.map((user) => (<ListGroupItem key={user.id} style={{borderBlockEndStyle:"solid", borderWidth:"2px",borderBlockEndColor:"lightgray"}}><Link className="link " to={`/quienesSomos/${user.id}`}>{user.name} - {user.email}</Link></ListGroupItem>))}
                    </ListGroup>
                </div>
            </main>
        </Fragment >
    )
}
export default AboutUs