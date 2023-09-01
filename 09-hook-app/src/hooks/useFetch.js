import { useEffect, useState } from "react"

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    const resp = await fetch(url, {headers: {
      'X-Api-Key': 'wBsCeit0SfqkSxMH0mHrpQ==JUINdnohJF697qA8'
    }})
    const data = await resp.json()
    setState({
      data,
      isLoading: false,
      hasError: null
    })
  }

  useEffect(() => {
    getFetch()
  }, [url])
  

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
