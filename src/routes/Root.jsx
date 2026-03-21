import "../index.css"
import "./Root.css"
import { NavLink, Outlet } from "react-router-dom"

export default function App() {
    return (
        <div className="app-container">
            <nav className="navbar" aria-label="Primary">
                <div className="navbar-brand">Pokedex</div>
                <div className="navbar-links">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "navbar-link is-active" : "navbar-link"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "navbar-link is-active" : "navbar-link"
                        }
                    >
                        About
                    </NavLink>
                </div>
            </nav>
            <main className="page-content">
                <Outlet />
            </main>
        </div>
    )
}