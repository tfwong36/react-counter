import { useState } from  "react";

function CounterSizeGenerator(props){
    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        setSize(parseInt(event.target.value));
        props.updateCounterSize(parseInt(event.target.value));
        reset();
    }

    function reset(){
        props.reset();
    }

    return (
        <div>
            <span>Size: </span>
            <input type="number" value={size} min="0" onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;