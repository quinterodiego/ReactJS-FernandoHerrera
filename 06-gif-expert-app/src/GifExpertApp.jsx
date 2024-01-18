import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Iphone'])

  const onAddCategory = (category) => {
    if(categories.includes(category)) return
    setCategories([ ...categories, category ])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr />
      <AddCategory onAddCategory={onAddCategory} />
      <GifGrid />
    </>
  )
}
