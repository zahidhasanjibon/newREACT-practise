import { NavLink } from 'react-router-dom';
import classses from './style/navbar.module.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        className={(navInfo) => (navInfo.isActive ? classses.active : '')}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={(navInfo) => (navInfo.isActive ? classses.active : '')}
                        to="/about"
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={(navInfo) => (navInfo.isActive ? classses.active : '')}
                        to="/services"
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navInfo) => (navInfo.isActive ? classses.active : '')}
                        to="/posts"
                    >
                        posts
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={(navInfo) => (navInfo.isActive ? classses.active : '')}
                        to="/dashboard"
                    >
                        dashboard
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
