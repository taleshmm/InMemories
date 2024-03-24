import "../App.css";
import { RiCrossFill } from "react-icons/ri";

export default function Footer() {
const menuFooter = ["Home", "Acessar o Blog", "Histórias", "Saiba mais"];
  
  return (
    <div>
       <div className="w-full h-12 bg-gray-400 text-black flex items-center justify-center mensagem-agradecimento">Obrigado por tudo meu irmão e sempre estaremos unidos em todos os planos, pois somos família. Descanse em Paz</div>
      <div className="w-full h-12 bg-black text-gray-400 flex items-center justify-center gap-2 memorie"> <RiCrossFill /> Em memória de Guilherme Rodrigues Melo Oliveira</div>

      <footer className="h-12 w-screen bg-lime-800 px-8 text-white flex items-center flex-col">
        <ul className="flex justify-center items-center gap-4 uppercase h-full text-xs footer-option">
          {menuFooter.map((item) => (
            <li key={item}>
              <a href={item === "Histórias" ? "#historias" : "/"}>{item}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
