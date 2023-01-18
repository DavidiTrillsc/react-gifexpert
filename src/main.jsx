import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
//Este es el componente principal, como tal solo está renderizando
//elc omponente final, GifExpertApp, mismo que se importó en la parte
//superior, así como la hoja de estilos CSS
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>
);
