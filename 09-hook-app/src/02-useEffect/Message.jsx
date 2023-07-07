import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
        
        window.addEventListener('mousemove', (e) => {
            console.log(e)
        })
        
        return () => {
            console.log('Message Unmounted')
        }
    }, [])
    

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
