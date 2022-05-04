import starFilled from "../images/star-fill.png";
import starEmpty from "../images/star-empty.png";

function Star({ isFilled, handleClick }) {

    const starImg = isFilled ? starFilled : starEmpty;

    return (
        <img
            src={starImg}
            className="card--favorite"
            onClick={handleClick}
        />
    );
}

export default Star;