import { useState } from "react"
export const AddCategory = ({ onNewCategorie }) => {
//Investigar el uso de props**    
  const [InputValue, setInputValue] = useState('One Punch')
  
  const OnInputChange=  ({target})  =>{
    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if( InputValue.trim().length <=1) return;
    //setCategories( categories => [ InputValue, ...categories])
    onNewCategorie( InputValue.trim())
    setInputValue(' ');
  }



    return (
        <form onSubmit={ onSubmit }>
            <input type="text"
                placeholder="Buscar Gifs"
                value={ InputValue }
                onChange={ OnInputChange}
            />
        </form>
  )
}

