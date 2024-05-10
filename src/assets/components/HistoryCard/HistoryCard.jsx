import { Card } from "./HistoryCardStyled.jsx"

const HistoryCard = ({image, description}) => {
    return (
        <Card>
            <div id="description">
                <p>{description}</p>
            </div>

            <div id="image">
                <img src={image} alt="Img logo" />
            </div>
        </Card>
    )
}

export default HistoryCard

