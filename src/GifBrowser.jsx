import { useState } from "react";
import AddCategory from "./components/AddCategory";



export default function componentName() {
  
  const [categories, setCategories] = useState( ["Carlos", "Mario"] );

  const onAddCategory = () => {
    setCategories( [...categories, "Apellido"] )
  }

  return (
    <>
        <h1>Gif Browser</h1>

        <AddCategory />
        
        <button onClick={ onAddCategory }>Add category</button>

        <ol>
          { categories.map( category => <li key={ category }> { category } </li> ) }
        </ol>
    </>
  );
}
