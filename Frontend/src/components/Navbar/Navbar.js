import React,{ useState , useEffect } from 'react';
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarItems';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({toggle}) =>{ // navbar component 

    const [scrollNav,setScrollNav] = useState(false);  //setting smooth scroll

    const changeNav = ()=> { // changing navbar according to the actions
        if(window.scrollY >= 80){ 
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{ // using useeffect
        window.addEventListener('scroll',changeNav) //adding event listner to window
    },[]);

    const toggleHome = () =>{ // toggling to home
        scroll.scrollToTop(); // scrolling to top
    }
    return(
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Food Org</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/loginpage">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
}

export default Navbar;