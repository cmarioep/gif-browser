import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from './components/GifGrid';



export default function componentName() {
  
  const [categories, setCategories] = useState( ["Carlos"] );

  const onAddCategory = (newValue) => {

    if ( categories.includes( newValue ) ) return;

    setCategories( [...categories, newValue] )
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
