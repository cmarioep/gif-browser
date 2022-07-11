import { useState } from "react";
import AddCategory from "./components/AddCategory";



export default function componentName() {
  
  const [categories, setCategories] = useState( ["Carlos", "Mario"] );

  const onAddCategory = (newValue) => {
    setCategories( [...categories, newValue] )
  }

  return (
    <>
        <h1>Gif Browser</h1>

        <AddCategory onNewCategory = { (newValue) => onAddCategory( newValue ) }/>


        <ol>
          { categories.map( category => <li key={ category }> { category } </li> ) }
        </ol>
    </>
  );
}
