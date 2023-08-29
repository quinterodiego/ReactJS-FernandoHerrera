import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {
    console.log('Mesagge Mounted')
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y }
      console.log(coords)
    }

    window.addEventListener('mousemove', onMouseMove)
  
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      console.log('Message Unmounted')
    }
  }, [])
  

  return (
    <p className="alert alert-danger mt-2">Usuario ya existe</p>
  )
}