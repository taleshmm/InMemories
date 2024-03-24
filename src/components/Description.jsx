import "../App.css";


export default function Description() {
  return (
    <section className="bg-lime-950 text-white flex flex-col gap-10 justify-center items-center py-32" id="historias">
    <h2 className="text-center text-4xl description-title">Histórias</h2>

      <div className="flex gap-4 items-center justify-center w-11/12 description-container-card">
        <img src="./public/story1.jpeg" className="w-20 h-20 rounded-full description-img" />
        <p className="w-full text-base">Uma vez quando tinhamos la pelos nossos 12 a 14 anos fomos acampar e perto tinha uma cachoeira, mas não sabiamos onde. Com isso decidimos que queriamos tomar banho na cachoeira, então partimos para buscar essa tal cachoeira. Estavamos seguindo uma trilha, mas não tinhamos certeza se era naquele caminho. E em um momento passou um casal o Gui ao invés de perguntar se a cachoeira era para aquele lado ele começou a falar o nome de todos nós, de onde viemos, nossa idade, quantas horas de viagem, onde estavamos acampado, mas menos a pergunta se a cachoeira era para aquele lado. Depois disso sempre zoavamos e rimos muito dessa história e dizer que ele so faltou falar o CPF e RG.</p>
      </div>

      <div className="flex gap-4 items-center justify-center w-11/12 description-container-card">
      
        <p className="w-full text-base text-right">Nesta viagem fomos para São Tomé das Letras de moto com nossos amigos. Minha moto não era para terra, mas fui mesmo assim e em um dos dias da viagem decidimos ir até uma tal cachoeira da Lua e eu fui de carona com o Gui por conta da minha moto. Chegamos até um certo lugar que disseram que tinha que subir pra chegar. Mas estava muito estranho o morro era muito pesado. O Fabão nossa amigo foi subindo na moto dele para ver se achava e eu e o Gui deixamos a moto la em baixo e subimos metade de um dos morros a pé pra ver. Eu subi com o capacete e coloquei ele na grama para poder descansar. Quando pensa que não meu capacete começa a descer ladeira a baixo e vai parar la em baixo. Porém o pior nem foi isso, no meio das quedas ele simplesmente saiu rolando em todas as bostas de vaca. Cheguei la em baixo e quando peguei o capacete tudo sujo. Tive que pegar folhas e limpar com o que deu. No final da história rimos muito e acabei tendo que ir embora com o capacete fedendo bosta. </p>
        <img src="./public/story2.jpeg" className="w-20 h-20 rounded-full description-img"/>
      </div>

      <div className="flex gap-4 items-center justify-center w-11/12 description-container-card">
        <img src="./public/story3.jpeg" className="w-20 h-20 rounded-full object-cover description-img" />
        <p className="w-full text-base">Quando pequenos sempre gostavamos de explorar as roças, acampamentos ou outros lugares que íamos. Pegavamos nossos pedaços de madeira e saimos pelas estradas ou florestas sempre explorando e brincando. Essas são umas das melhores memórias da infância que temos, as vezes achavamos uma arvóre e subiamos nela e cada um achava um galho para ser seu quarto. So tenho a agradecer por estes momentos.</p>
      </div>
    </section>
  )
}