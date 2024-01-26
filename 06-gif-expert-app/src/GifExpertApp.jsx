import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

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
