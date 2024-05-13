import React from "react"

const Rent = () => {
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
            { name, lastname, book, author, editorial, Year }
        ])
        e.target.reset()

        setName('')
        setLastname('')
        setBook('')
        setAuthor('')
        setEditorial('')
        setYear('')
    }
    return (
        <div>
                <div className="form">
                <h3>Formulario</h3>
                    <form onSubmit={saveUser}>
                        <input type="text" placeholder="Nombre" className="input" onChange={e => setName(e.target.value.trim())} />
                        <input type="text" placeholder="Apellido" className="input" onChange={e => setLastname(e.target.value.trim())} />
                        <input type="text" placeholder="libro" className="input" onChange={e => setBook(e.target.value.trim())} />
                        <input type="text" placeholder="autor" className="input" onChange={e => setAuthor(e.target.value.trim())} />
                        <input type="text" placeholder="editorial" className="input" onChange={e => setEditorial(e.target.value.trim())} />
                        <input type="text" placeholder="Año" className="input" onChange={e => setYear(e.target.value.trim())} />
                        <button type="submit" className="button">registrar</button>
                    </form>
                </div>
                <div className="container-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Book</th>
                                <th>Autor</th>
                                <th>Editorial</th>
                                <th>Año</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item, index) => (<tr key={index}><td>{item.name}</td><td>{item.lastname}</td><td>{item.book}</td><td>{item.author}</td><td>{item.editorial}</td><td>{item.Year}</td></tr>))
                            }
                        </tbody>
                    </table>
                </div>
        </div>

    )
}
export default Rent