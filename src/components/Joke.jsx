import { useState } from "react";

function Joke(props) {

    const [isShow, setIsShow] = useState(false);

    const toggle = () => {
        setIsShow(prevIsShow => !prevIsShow);
    }

    const buttonText = isShow ? "Hide punchline" : "Show punchline";

    return ( 
        <div>
            {props.setup && ( <h3>{props.setup}</h3> )}
            {isShow && ( <p>{props.punchline}</p> )}
            <button onClick={toggle}>{buttonText}</button>
            <hr />
        </div>
     );
}

export default Joke;