
import { useState } from 'react';
import React from 'react';
import { AddCategory, GifGrid } from './components'
export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch '])
/*El useState define el estado inicial de un componente así como las
funciones que habrán de hacer cambiar su estado*/

  const onAddCategory = (NewCategory) =>{
    if ( categories.includes(NewCategory) ) return;
    setCategories([ NewCategory, ...categories])
    //console.log('Valorant');
/* La función onAddCategory añade una nueva categoria haciendo uso
de una prop denominada 'New Category', se apoya de una validación
sencilla la cual verifica que la variable 'categories' no contenga
un valor identico al que se pretende registrar, en caso que si
exista ese valor, regresara al valor normal de la variable, en caso
contrario añadira 'NewCategory' al arreglo 'categories'
sobreescribiendo todo el arreglo.*/

  }
  
  
  return (
    <>
        <h1>GifExpertAPP</h1>
        <AddCategory 
          onNewCategorie={ (value) => onAddCategory(value)}
          currentCategories={ categories }
        />


        <button onClick={onAddCategory}>Agregar</button>

          { 
            categories.map( category =>(
              <GifGrid 
                key={category} 
                category={category}
              />
            ))
          }
    </>
  )
}
