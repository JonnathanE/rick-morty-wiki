import { Container, LogoContainer, Menu, MenuItem, Wrapper } from './navbar.elements';
import { NavLink } from 'react-router-dom';
import { slide as MenuBurger } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { deviceSice } from '../../hook/responsive';
import stylesBurgerMenu from './menuBurgerStyles';
import Icon from '../../images/icons/icons8-rick-sanchez.svg';
import { IconContext } from 'react-icons';

const Navbar = () => {

    const isMobile = useMediaQuery({ maxWidth: deviceSice.mobile });

    const navbarMenu = (
        <Menu>
            <MenuItem>
                <NavLink to='/' className={({ isActive }) => (isActive ? " text-green-400 border-b-2 border-b-green-400" : "")}>Home</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to='/characters' className={({ isActive }) => (isActive ? " text-green-400 border-b-2 border-b-green-400" : "")}>Character</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to='/locations' className={({ isActive }) => (isActive ? " text-green-400 border-b-2 border-b-green-400" : "")}>Location</NavLink>
            </MenuItem>
            <MenuItem>
                <NavLink to='/episodes' className={({ isActive }) => (isActive ? " text-green-400 border-b-2 border-b-green-400" : "")}>Episode</NavLink>
            </MenuItem>
        </Menu>
    )

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        <img src={Icon} alt='Icon Page' />
                        <p>Rick and Morty</p>
                        <p>Wiki</p>
                    </LogoContainer>
                    {isMobile
                        ? <MenuBurger right styles={stylesBurgerMenu}>{navbarMenu}</MenuBurger>
                        : navbarMenu
                    }
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}

export default Navbar