import React from 'react';

function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return ( 
        <div onClick={props.toggle} style={styles} className='Box'>

        </div>
     );
}

export default Box;