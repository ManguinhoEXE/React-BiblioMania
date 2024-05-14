import { Fragment } from "react"
import NavB from "./NavB"

const Message = (props) => {
    return (
        <Fragment>
            <header>
                <NavB />
            </header>
            <main>
                <div className="card">
                    <div className="person">
                        <h4>{props.name} {props.lastname}</h4>
                        <p>{props.note}</p>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
export default Message