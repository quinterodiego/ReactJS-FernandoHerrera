import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['computers'])

  const onAddCategory = () => {
    setCategories([...categories, 'smartphones'])
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <hr />

        <AddCategory />
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {
            categories.map(category => (
              <li key={category}>{category}</li>
            ))
          }
        </ol>
    </>
  )
}
