import React, { Fragment, useState } from "react"
import { Modal, ModalBody, ModalHeader, ModalFooter, } from 'reactstrap';
import NavB from "./NavB";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Rent = () => {
    const [id, setId] = React.useState(1)
    const [name, setName] = React.useState('')
    const [lastname, setLastname] = React.useState('')
    const [book, setBook] = React.useState('')
    const [author, setAuthor] = React.useState('')
    const [editorial, setEditorial] = React.useState('')
    const [Year, setYear] = React.useState('')
    const [list, setList] = React.useState([])

    const saveUser = (e) => {
        e.preventDefault();

        const existingUser = list.find(user => user.name === name && user.lastname === lastname);
        if (existingUser) {
            alert('Ya existe un usuario con ese nombre y apellido.');
            return;
        }
        if (!name || !lastname || !book || !author || !editorial || !Year) return alert('Llenar todos los campos')

        setList([
            ...list,
            { id: id, name, lastname, book, author, editorial, Year }
        ])
        e.target.reset()

        setId(id + 1)
        setName('')
        setLastname('')
        setBook('')
        setAuthor('')
        setEditorial('')
        setYear('')
    }
    const [ModalEdit, setModalEdit] = useState(false)
    const [ModalDelete, setModalDelete] = useState(false)
    const [userSelect, setUserSelect] = useState({
        id: '',
        name: '',
        lastname: '',
        book: '',
        author: '',
        editorial: '',
        Year: ''
    })

    const selectUser = (item, caso) => {
        setUserSelect(item);
        (caso === 'Editar') ? setModalEdit(true) : setModalDelete(true)
    }

    const handlechange = e => {
        const { name, value } = e.target;
        setUserSelect((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const edit = () => {
        var datanew = list;
        datanew.map(user => {
            if (user.id === userSelect.id) {
                user.name = userSelect.name;
                user.lastname = userSelect.lastname;
                user.book = userSelect.book;
                user.author = userSelect.author;
                user.editorial = userSelect.editorial;
                user.Year = userSelect.Year;

            }
        });
        setList(datanew);
        setModalEdit(false);
    }

    const Delete = () => {
        setList(list.filter(user => user.id !== userSelect.id))
        setModalDelete(false)
    }



    return (
        <Fragment>
            <header>
                <NavB />
            </header>
            <main className="main-rent overflow-auto">
                <div className="container-form">
                    <h3 className="title-table title-form">Solicitar prestamo</h3>
                    <Form className="form-rent" onSubmit={saveUser}>
                        <FormGroup>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl type="text" placeholder="Pedro" onChange={e => setName(e.target.value.trim())}></FormControl>
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Apellido</FormLabel>
                            <FormControl type="text" placeholder="Mendoza Miranda" onChange={e => setLastname(e.target.value.trim())}></FormControl>
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Libro</FormLabel>
                            <FormControl type="text" placeholder="El principito" onChange={e => setBook(e.target.value.trim())}></FormControl>
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Autor</FormLabel>
                            <FormControl type="text" placeholder="Antoine de Saint-Exupéry" onChange={e => setAuthor(e.target.value.trim())}></FormControl>
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Editorial</FormLabel>
                            <FormControl type="text" placeholder="Salamandra" onChange={e => setEditorial(e.target.value.trim())}></FormControl>
                        </FormGroup>

                        <FormGroup>
                            <FormLabel>Año</FormLabel>
                            <FormControl type="number" placeholder="2023" onChange={e => setYear(e.target.value.trim())}></FormControl>
                        </FormGroup>
                        <Button type="submit" className="button">Registrar</Button>
                    </Form>
                </div>
                <div className="container-table">
                    <Table striped borderless hover className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Libro</th>
                                <th>Autor</th>
                                <th>Editorial</th>
                                <th>Año</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item, index) => (<tr key={index}>
                                    <th>{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.book}</td>
                                    <td>{item.author}</td>
                                    <td>{item.editorial}</td>
                                    <td>{item.Year}</td>
                                    <td className="buttons"><button className="button-crud-edit" onClick={() => selectUser(item, 'Editar')}>Editar</button> {"  "}
                                        <button className="button-crud-delete" onClick={() => selectUser(item, 'Eliminar')}>Eliminar</button></td>
                                </tr>))
                            }
                        </tbody>
                    </Table>

                    <Modal isOpen={ModalEdit}>
                        <ModalHeader>
                            <div>
                                <h3>Editar Prestamo</h3>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="form-group">

                                <label className="label">ID</label>
                                <input
                                    className="input-modal"
                                    type="text"
                                    name="id"
                                    value={userSelect && userSelect.id}
                                    onChange={handlechange}
                                    disabled
                                />
                                <br />

                                <label className="label">Nombre</label>
                                <input
                                    className="input-modal"
                                    type="text"
                                    name="name"
                                    value={userSelect && userSelect.name}
                                    onChange={handlechange}
                                />
                                <br />

                                <label className="label">Apellido</label>
                                <input
                                    className="input-modal"
                                    type="text"
                                    name="lastname"
                                    value={userSelect && userSelect.lastname}
                                    onChange={handlechange}
                                />
                                <br />

                                <label className="label">Libro</label>
                                <input
                                    className="input-modal"
                                    type="text"
                                    name="book"
                                    value={userSelect && userSelect.book}
                                    onChange={handlechange}

                                />
                                <br />

                                <label className="label">Autor</label>
                                <input
                                    className="input-modal"
                                    type="text"
                                    name="author"
                                    value={userSelect && userSelect.author}
                                    onChange={handlechange}

                                />
                                <br />

                                <label className="label">Editorial</label>
                                <input
                                    className="input-modal"
                                    type="text"
                                    name="editorial"
                                    value={userSelect && userSelect.editorial}
                                    onChange={handlechange}

                                />
                                <br />

                                <label className="label">Año</label>
                                <input
                                    className="input-modal"
                                    type="number"
                                    name="Year"
                                    value={userSelect && userSelect.Year}
                                    onChange={handlechange}

                                />
                                <br />
                            </div>
                        </ModalBody>
                        <ModalFooter className="footer-modal">
                            <button className="button-modal-update" onClick={() => edit()}>
                                Actualizar
                            </button>
                            <button
                                className="button-modal-cancel"
                                onClick={() => setModalEdit(false)}
                            >
                                Cancelar
                            </button>
                        </ModalFooter>
                    </Modal>
                </div>

                <Modal isOpen={ModalDelete}>
                    <div className="container-delete">
                        <ModalBody className="body-delate">
                            Estás Seguro que deseas eliminar el registro {userSelect && userSelect.id}
                        </ModalBody>
                        <ModalFooter>
                            <button className="button-modal-yes" onClick={() => Delete()}>
                                Sí
                            </button>
                            <button
                                className="button-modal-no"
                                onClick={() => setModalDelete(false)}
                            >
                                No
                            </button>
                        </ModalFooter>
                    </div>
                </Modal>
            </main>
        </Fragment>

    )
}
export default Rent