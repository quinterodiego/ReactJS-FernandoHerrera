export const GifItem = ({title, url}) => {
    return (
        <div className="card">
            <img src={url} alt="" srcset="" />
            <p>{title}</p>
        </div>
    )
}
