import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './style.css';

export function Header() {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="logo pokemon" />
            <nav className='nav'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pokedex">Pokédex</NavLink>
                <NavLink to="/lendarios">Lendários</NavLink>
            </nav>
        </div>
    )

}