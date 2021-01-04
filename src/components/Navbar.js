import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className="navbar-brand">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        // activeClassName={'active'}
                        to={'/'}
                        exact
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to={'/about'}
                    >
                        Info
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
)