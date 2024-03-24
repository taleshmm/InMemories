 import { FaGithub } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import "../App.css";
import {useState, useEffect} from "react";
import AppBar from "./AppBar";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolling, setScrolling] = useState(true);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
      if (isOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    
  function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    setScrolling(currentScroll <= lastScroll);
    setLastScroll(currentScroll <= 0 ? 0 : currentScroll);
    
  }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  
  }, [isOpen, lastScroll]);
  
  return (
    <header style={{ top: scrolling ? "0" : "-100px" }} className="h-14 bg-lime-950 text-white flex items-center justify-between w-screen px-8 fixed top-0 left-0">
      <section className="flex h-10 w-4/6 items-center gap-4">
        <div className="h-9 w-9 bg-white flex justify-center items-center rounded-full">
          <span id="logo" className="text-lime-950 text-2xl">G</span>
        </div>
        <h1>In Memories</h1>
        <div id="menu-header" className="text-sm flex  gap-4">
          <a href="/" className="cursor-pointer"><h4>ACESSAR O BLOG</h4></a>
          <a href="#historias" className="cursor-pointer ease-in">             <h4>HISTÓRIAS</h4></a>
          </div>
      </section>
      
      <section className="flex text-white justify-between items-center">
        <div className="flex gap-4 text-2xl">
          <a href="https://github.com/taleshmm" className="cursor-pointer" target="_blank"><FaGithub /></a>
          <IoMdMenu  className="cursor-pointer" onClick={openMenu}/>

          <AppBar isOpen={isOpen} open={openMenu}/>
        </div>
       
      </section>
    </header>
  )
}