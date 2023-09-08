import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['computers'])

  const onNewCategory = (category) => {
    if(categories.includes(category)) return
    setCategories([category, ...categories])
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <hr />

        <AddCategory onNewCategory={onNewCategory} />

        {
          categories.map(category => (
            <GifGrid key={category} category={category}/>
          ))
        }

    </>
  )
}
