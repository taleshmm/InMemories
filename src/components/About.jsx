import "../App.css"
import Card from "./Card";

export default function About() {
  return (
    <section className="py-16 px-4 w-screen flex flex-col justify-center items-center">
      
      <div className="flex items-center justify-center flex-col gap-2">
      <h2 className="text-4xl text-lime-950" id="card-title">Virtudes</h2>
<p className="text-center" id="card-text">Algumas das muitas virtudes que o Gui possui</p>
      </div>

      <div className="grid gap-3 grid-cols-1 grid-rows-6 justify-items-center items-center w-full mt-8" id="cards-grid">
        <Card title="Aventureiro" description="Gui foi sinônimo de aventura para todos, sempre animado para qualquer coisa, seja viagem ou até mesmo pular de paraquedas. Com um sorriso no rosto desbravava esse mundo." image="./public/aventura.jpeg" />
        <Card title="Família" description="Não há como falar do Gui e não falar de família. Sempre foi muito conectado a família e sempre com muito carinho e amor. A união com família que ele tem vai além dos mundos. Sempre estaremos juntos." image="./public/familia.jpeg" />
        <Card title="Evolução" description="Gui sempre teve um espírito evoluído, nunca se importou com bens materiais para ele tudo estava bom, ele sempre teve uma grande conexão com a natureza e o universo. Amava saber comos as coisas funcionavam." image="./public/evol.jpeg" />
        <Card title="Alegria" description="Desde pequeno sempre trazendo alegria consigo, um sorriso no rosto, uma piada boba e um copo de cerveja na mão, esse é o Gui. Sempre trouxe uma leveza e uma paz no ambiente que estava." image="./public/alegria.jpeg" />
        <Card title="Amor" description="Amor pela música, amor pela natureza, amor pelas pessoas, amor pela vida, amor por viagem, amor pela família, amor por tudo. Gui sempre amou, sua essência é amar. Amar muito e todos." image="./public/amor.jpeg" />
        <Card title="Companheiro" description="Gui sempre foi um companheiro e um irmão para todas a horas. Sempre podiamos contar com ele seja para uma conversa boba ou para um apoio em algo mais sério." image="./public/companheiro.jpeg" />
      </div>
    </section>
  )
  
}
