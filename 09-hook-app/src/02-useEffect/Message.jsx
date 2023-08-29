import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {
    console.log('Mesagge Mounted')
  
    return () => {
      console.log('Message Unmounted')
    }
  }, [])
  

  return (
    <p className="alert alert-danger mt-2">Usuario ya existe</p>
  )
}