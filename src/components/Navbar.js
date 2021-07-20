import React from 'react'
import styled, { css } from 'styled-components/macro' 
import {Link} from 'react-router-dom'
import { MenuData } from './data/MenuData'
import { Button } from './Button'
import Doner from '../components/pages/images/white.jpg'


const Nav = styled.nav`
   height: 60px;
   display: flex;
   justify-content: space-between;
   padding: 1rem 2rem;
   z-index: 100;
   position: fixed;
   width: 100%;

`
const NavMenu =  styled.div`
    display: flex;
    align-items: center; 
    margin-right: -50px;

    @media screen and (max-width: 760px){
        display: none;
    }
`

const MenuBars = styled.i`
   display: none;

    @media screen and (max-width: 760px){
        display: block;
        background-image: url(${Doner});
        background-size: contain;
        height: 40px;
        width: 40px;
        position: absolute;
        top: 0;
        cursor: pointer;
        right: 0;
        transform: translate(-50%, 25%);
    }
`

const NavLink = css`
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;
const Logo =styled(Link)`
   ${NavLink};
`
const NavMenulinks = styled(Link)`
   ${NavLink};
    
`;

const NavBtn = styled.div`
   display: flex;
   align-items: center;
   margin-right: 24px;
    @media screen and (max-width: 760px){
        display: none;
    }
`

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to='/'>TiC</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {MenuData.map((item, index) => (
                    <NavMenulinks to={item.link} key={index}>
                          {item.title}
                    </NavMenulinks>
                ))}
            </NavMenu> 
            <NavBtn>
              <Button to='/' primary ='true'>Register</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
