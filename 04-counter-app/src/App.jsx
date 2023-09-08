import PropTypes from 'prop-types'

export const App = ({ titulo }) => {
    return (
        <>
            <h1>{titulo}</h1>
            <hr />

            <p>Soy un párrafo</p>
        </>
    )
}

App.propTypes = {
    titulo: PropTypes.string.isRequired
}

App.defaultProps = {
    titulo: 'No hay ningún título'
}