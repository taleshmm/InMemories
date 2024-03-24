import "../App.css";

export default function Cards({title, description, image}) {
  return (
    <a href="/" className="flex gap-2 flex-col w-full h-96 rounded-md shadow-2xl pb-2">
     
        <img src={image} className="w-full object-cover h-1/2 rounded-t-md" />
        <h2 className="text-xl text-lime-800 px-4">{title}</h2>
        <p className="px-4">{description}</p>
     
   
    </a>
  )
  
}