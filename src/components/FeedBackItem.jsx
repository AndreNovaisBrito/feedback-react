import { FaTimes } from "react-icons/fa"
import PropTypes from 'prop-types'
import Card from "./shared/Card.jsx"

function FeedBackItem({ item, handleDelete }) {
    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired,
}



export default FeedBackItem
