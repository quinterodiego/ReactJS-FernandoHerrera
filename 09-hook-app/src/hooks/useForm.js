import {useState} from 'react'

export const useForm = (initialForm = {}) => {

    const [formState, setFormstate] = useState(initialForm);

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormstate({
            ...formState,
            [name]: value
        })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }
}
