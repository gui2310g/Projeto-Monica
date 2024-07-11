import { Card } from "./HistoryCardStyled.jsx"

const HistoryCard = ({image, title, description}) => {
    return (
        <Card>
           
            <div id="history">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <div id="image">
                <img src={image} alt="Img logo" />
            </div>
        </Card>
    )
}

export default HistoryCard

