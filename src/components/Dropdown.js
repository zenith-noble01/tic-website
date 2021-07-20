import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { MenuData } from './data/MenuData'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'




const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    justify-content: center;
    left: 0;
    transition: .5s ease-in-out;
    opacity: ${({isOpen}) =>(isOpen ? '1' : '0')};
    top: ${({isOpen}) =>(isOpen ? '0' : '-100%')};
`
const Icon = styled.div`
position: absolute;
right: 1.5rem;
top: 1.2rem;
background: transparent;
font-size: 2.2rem;
outline: none;
cursor: pointer;
`
const CloseIcon = styled(FaTimes)`
    color: white;
`
const DropdownWrapper = styled.div``

const DropdownMenu = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(4, 80px);
   text-align: center;
   margin-bottom: 4rem;


   @media screen and (max-width:760px){
       grid-template-rows: repeat(4, 60px);
   }
`
const DropdownLink = styled(Link)`
   display: flex;
   color: whitesmoke;
   font-size: 1.5rem;
   align-items: center;
   justify-content: center;
   text-decoration: none;
   transition: .5s ease-in-out;
   cursor: pointer;

   &:hover{
       color: whitesmoke;
       /* background: #000d1a; */
   }

`
const BtnWrapper =styled.div``



const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer  isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {MenuData.map((item, index) =>(
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                     ))}
                </DropdownMenu>
                <BtnWrapper>
                    <Button primary='true' round='true' big='true' to='/register'>
                        Register
                    </Button>
                </BtnWrapper>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
