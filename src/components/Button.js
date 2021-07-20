import styled from "styled-components";
import { Link } from "react-router-dom";


export const Button = styled(Link)`
   background: ${({primary}) =>(primary ? '#000d1a'  : 'cd853f')};
   white-space: nowrap;
   outline:  none;
   border: none;
   min-width: 100px;
   max-width: 200px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.5s ease-in-out;
   display: flex; 
   align-items: center;
   padding: ${({big}) =>(big ? '16px 40px': '14px 24px')};
   color:  ${({primary}) => (primary ? 'white': '#000d1a')};
   font-size: ${({big}) => (big ? '20px' : '15px')};
   border-radius: 5px;

   &:hover{
       transform: translateY(-2px);
       /* background: #188fff; */
       border: 1px solid #000d1a;
       background: none;
   }
`