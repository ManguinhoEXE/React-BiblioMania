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
                        <Card.Img variant="top" src="https://i.blogs.es/0720c8/libreria/500_333.jpeg"></Card.Img>
                        <Card.Body>
                            <Card.Text className="text-card">
                                Un monton de historias te esperan aqui en bibliomania
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card" border="0" style={{minWidth:"20rem", width: "fit-content"}}>
                        <Card.Img variant="top" src="https://www.radioipiales.co/wp-content/uploads/2023/09/istockphoto-1130461533-612x612-1.jpg"></Card.Img>
                        <Card.Body>
                            <Card.Text className="text-card">
                                La mejor atención y dispoción para ayuarte
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card" border="0" style={{minWidth:"20rem", width: "fit-content"}}>
                        <Card.Img variant="top" src="https://www.comunidadbaratz.com/wp-content/uploads/Leer-es-un-modo-de-entretenimiento-y-conocimiento-que-desde-hace-tiempo-convive-y-compite-contra-otras-formas-de-ocio-e-informacion.jpg"></Card.Img>
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