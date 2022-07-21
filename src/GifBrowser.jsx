import { useState } from 'react';
import { AddCategory, GifGrid } from './components';




export const GifBrowser = ()  => {
  
  const [categories, setCategories] = useState( ["goku"] );

  const onAddCategory = (newValue) => {

    if ( categories.includes( newValue ) ) return;

    setCategories( [ newValue, ...categories ] )
  }

  return (
    <>
        <h1>Gif Browser</h1>

        <AddCategory onNewCategory = { (newValue) => onAddCategory( newValue ) }/>

        { 
          categories.map( category => ( <GifGrid key={ category } category={ category }/> ) ) 
        }


    </>
  );
}
