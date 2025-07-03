type ButtonProps={

    title:string
  
}


export const Button =({title}:ButtonProps)=>{

    return(
        <button className="custom-button z-10 border-white bg-white border-1  text-gray-900">
        <span className="font-semibold">{title}</span>
      </button>
    )
}