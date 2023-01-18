import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGif'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({category}) => {


  const {images, isLoading } = useFetchGifs( category );
  console.log({isLoading})

  /*const [images, setImages] = useState([])

  const getImages = async ()=>{
    const newImages = await getGifs(category);
    setImages(newImages)
  }
  

  useEffect( ()=>{ getImages();}, [])
  */
    return (
    <>
        <h3>{ category}</h3>
        {
          isLoading && ( <h2>Cargando...</h2>)
        }

        <div className='card-grid'>
            {
              /*Forma normal de escribir la sentencia:
              images.map( image => (
                <li key={image.id}>{image.title}</li>
              ))*/

              //Forma desestructurada:
              /*images.map( ({id, title}) => (
                <li key={id}>
                  {title}
                </li>
              ))*/
              //Forma ideal usando components de react para una 
              //forma más estructurada de llevar el codigo
              images.map( ( image ) => (
                <GifItem 
                    key={ image.id }
                    {...image}
                />
              ))
              
              
            }
        </div>
    </>
  )
}
