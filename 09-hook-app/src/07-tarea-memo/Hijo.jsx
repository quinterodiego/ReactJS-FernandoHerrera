import { memo } from "react"

export const Hijo = memo(({ numero, incrementar }) => {

  console.log('Renderizo')

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
});