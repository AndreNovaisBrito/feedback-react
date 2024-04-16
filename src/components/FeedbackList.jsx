import PropTypes from "prop-types"
import FeedbackItem from "./FeedBackItem.jsx"

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0){
        return <p>No feedback Yet </p>

    }
  return (
    <div className="feedbackList">
      {feedback.map((item) => 
          <FeedbackItem 
            key={item.id} 
            item={item}
            handleDelete={handleDelete}
          />
      )}

    </div>
  )
}

FeedbackList.propTypes = {
    feeback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            ratind: PropTypes.number.isRequired,
        })
    ),
}

export default FeedbackList
