import { Link } from "react-router-dom"
import "./index.scss"

const HeaderOrganization = () => {
    return (
        <div className="header">
            <p className="p2O">
              Organização
              </p>
              <p className="p1T">
              <Link className="linkT" to={`/`}>Tarefas</Link>
              </p>
            </div>
        )
}

export default HeaderOrganization