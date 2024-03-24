import { MdHome } from "react-icons/md";
import { IoWifiOutline, IoPeopleCircleSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import "../App.css";
import {useState, useEffect} from "react";
import styled from "styled-components";

const BackDrops = styled.div`
position: fixed;
top: 0;
right: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 10;
display: ${({isOpen}) => (isOpen ? "block" : "none")}
`;

const MenuBar = styled.nav`
position: fixed;
top: 0;
right: ${({isOpen}) => (isOpen ? "0%" : "-100%")};
width: 60%;
background-color: white;
z-index: 11;
transition: right 0.3s ease-in-out;
max-width: 300px;
height: 100vh;
`;

const ListBar = styled.li`
display: flex;
font-size: 1rem;
aling-items: center;
color: rgba(0, 0, 0, 0.54);
padding: 8px 0;

&:hover {
  color: rgb(26 46 5);
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: 100%;
  width: 80%;
  border-radius: 4px;
}
`;

export default function AppBar({isOpen, open}) {
  return (
    <BackDrops isOpen={isOpen} onClick={open}> 
      <MenuBar isOpen={isOpen}>
       <ul className="py-8 flex flex-col gap-2 text-base w-full justify-start">
        <ListBar>
          <MdHome className="text-2xl min-w-14" />
          <a href="/" className="cursor-pointer">Home</a>
        </ListBar>

        <ListBar>
          <IoWifiOutline  className="text-2xl min-w-14" />
          <a href="/" className="cursor-pointer">Acessar o blog</a>
        </ListBar>

        <ListBar>
          <FaEnvelope  className="text-2xl min-w-14" />
          <a href="/" className="cursor-pointer">Realizar contato</a>
        </ListBar>

        <ListBar>
          <FaSearchPlus className="text-2xl min-w-14" />
            <a href="/" className="cursor-pointer">Saiba mais</a>
        </ListBar>

        <ListBar>
          <IoPeopleCircleSharp className="text-2xl min-w-14" />
            <a href="/" className="cursor-pointer">CMS</a>
        </ListBar> 

      </ul>
      </MenuBar>
    </BackDrops>
  )
}