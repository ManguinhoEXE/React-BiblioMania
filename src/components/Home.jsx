import { Fragment } from "react"
import NavB from "./NavB"
import Card from "react-bootstrap/Card"

const Home = () => {
    return (
        <Fragment>
            <header>
                <NavB />
            </header>
            <main>
                <div className="hero-text">
                    <h1 className="text-center">Descubre un mundo <br></br> de conocimiento en <br></br>BiblioMania</h1>
                </div>

                <div className="container-card">
                    <Card className="card" border="0" style={{minWidth:"20rem", width: "fit-content"}}>
                        <Card.Img variant="top" src="url('src/assets/libros.jpeg')"></Card.Img>
                        <Card.Body>
                            <Card.Text className="text-card">
                                Un monton de historias te esperan aqui en bibliomania
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card" border="0" style={{minWidth:"20rem", width: "fit-content"}}>
                        <Card.Img variant="top" src="url('src/assets/atencion.jpg')"></Card.Img>
                        <Card.Body>
                            <Card.Text className="text-card">
                                La mejor atención y dispoción para ayuarte
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card" border="0" style={{minWidth:"20rem", width: "fit-content"}}>
                        <Card.Img variant="top" src="url('src/assets/llevar.jpg')"></Card.Img>
                        <Card.Body>
                            <Card.Text className="text-card">
                                Realiza el prestamo del libro que quieras y disfrutalo donde quieras
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </main>
        </Fragment>
    )
}
export default Home