import React from 'react';
import { AboutSection, AboutWrap, FooterA, FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle, FooterWrap, Logo, WebRights } from './FooterItems';
import { animateScroll as scroll } from 'react-scroll';
import {FaYoutube, FaFacebook} from 'react-icons/fa';
import {FaGoogle} from 'react-icons/fa';

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return(
        <FooterContainer> {/*contains all contents of Footer item */}
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/About">How it works</FooterLink>
                            <FooterLink to="/signin">Terms of services</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>

                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterA href="https://www.youtube.com" target="_blank" ><FaYoutube size="2em"/>  Youtube</FooterA>
                            <FooterA href="https://www.google.com" target="_blank" ><FaGoogle size="2em"/>  Google</FooterA>
                            <FooterA href="https://www.facebook.com" target="_blank" ><FaFacebook size="2em"/>  Facebook</FooterA>
                        </FooterLinksItems>
                    </FooterLinksWrapper>

                    {/* <FooterLinksWrapper>

                        <FooterLinksItems>
                            <FooterLinkTitle>Explore</FooterLinkTitle>
                            <FooterA href="./carousel" target="_blank" >fo_page</FooterA>
                            <FooterA href="./home" target="_blank" >Home</FooterA>
                            <FooterA href="./inventory" target="_blank" >Inventory</FooterA>
                            <FooterA href="./calorie" target="_blank" >Calorie</FooterA>
                            <FooterA href="./profile" target="_blank" >Profile</FooterA>
                        </FooterLinksItems> 
                    </FooterLinksWrapper>*/}

                </FooterLinksContainer>
                <AboutSection>
                    <AboutWrap>
                        <Logo to="/" onClick={toggleHome}>Food Org</Logo>
                        <WebRights>FoodOrganizer © {new Date().getFullYear()} All rights reserved</WebRights>
                    </AboutWrap>
                </AboutSection>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer