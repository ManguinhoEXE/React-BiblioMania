import React, { useState } from "react"
import { Modal, ModalBody, ModalHeader, ModalFooter, } from 'reactstrap';

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
        (caso === 'Editar') ? setModalEdit(true): setModalDelete(true)
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
        <div>
            <div className="form">
                <h3 className="title-from">Solicitar prestamo</h3>
                <form onSubmit={saveUser}>
                    <label className="label">Nombre:</label>
                    <input type="text" className="input" onChange={e => setName(e.target.value.trim())} />
                    <label className="label">Apellido:</label>
                    <input type="text" className="input" onChange={e => setLastname(e.target.value.trim())} />
                    <label className="label">Libro:</label>
                    <input type="text" className="input" onChange={e => setBook(e.target.value.trim())} />
                    <label className="label">Autor:</label>
                    <input type="text" className="input" onChange={e => setAuthor(e.target.value.trim())} />
                    <label className="label">Editorial:</label>
                    <input type="text" className="input" onChange={e => setEditorial(e.target.value.trim())} />
                    <label className="label">Año:</label>
                    <input type="number" className="input" onChange={e => setYear(e.target.value.trim())} />
                    <button type="submit" className="button">registrar</button>
                </form>
            </div>
            <div className="container-table">
                <table className="table">
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
                </table>

                <Modal isOpen={ModalEdit} className="modal-fullscreen">
                    <ModalHeader>
                        <div>
                            <h3 className="title-modal">Editar Prestamo</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-modal">

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
                        <button className="button-modal" onClick={() => edit()}>
                            Actualizar
                        </button>
                        <button
                            className="button-modal"
                            onClick={() => setModalEdit(false)}
                        >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>
            </div>

            <Modal isOpen={ModalDelete} className="modal-fullscreen">
                <div className="container-delete">
                <ModalBody className="body-delate">
                    Estás Seguro que deseas eliminar el registro {userSelect && userSelect.id}
                </ModalBody>
                <ModalFooter className="footer-delete">
                    <button className="button-modal" onClick={() => Delete()}>
                        Sí
                    </button>
                    <button
                        className="button-modal"
                        onClick={() => setModalDelete(false)}
                    >
                        No
                    </button>
                </ModalFooter>
                </div>
            </Modal>
        </div>

    )
}
export default Rent