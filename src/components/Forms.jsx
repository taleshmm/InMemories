import "../App.css";

export default function Forms() {
  return (

    <section className="py-16 px-4 w-full flex items-center justify-center flex-col">
      <h2 className="text-lime-950 text-2xl" id="title-forms">Nós conte uma história</h2>
      
      <form className="grid-forms w-full">
        
        <input type="text"  placeholder="Nome" name="name" className="h-14 border border-slate-700 border-solid rounded p-4 focus:outline-none focus:ring focus:ring-lime-800 focus:border-none" id="input-name"/>
        
         <input type="text"  placeholder="Email" name="email" className="h-14 border border-slate-700 border-solid rounded p-4 focus:outline-none focus:ring focus:ring-lime-800 focus:border-none" id="input-email"/>
        
         <input type="text"  placeholder="Celular" name="phone" className="h-14 border border-slate-700 border-solid rounded p-4 focus:outline-none focus:ring focus:ring-lime-800 focus:border-none"  id="input-phone" />
        
         <textarea placeholder="Mensagem" name="message" className="border border-slate-700 border-solid rounded p-4 focus:outline-none focus:ring focus:ring-lime-800 focus:border-none resize-none truncate h-48" id="input-message"/>
        
      </form>
<div className="mt-3 flex items-center justify-center w-full h-10" id="container-button-forms">
  <button className="w-full h-full bg-lime-950 text-white rounded-md hover:bg-lime-800" id="button-forms">ENVIAR</button>
</div>
      
      
    </section>
   
  )
}