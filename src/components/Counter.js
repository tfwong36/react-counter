import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_SUM } from "../constants/constants";

function Counter(props){
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();
    function handleIncrease(){
        setNumber(number);
        dispatch({type: UPDATE_SUM, payload: 1});
        setNumber(number + 1);
    }
    function handleDecrease(){
        setNumber(number);
        dispatch({type: UPDATE_SUM, payload: -1});
        setNumber(number - 1);
    }
    return (
        <div className="counter">
            <button onClick={handleIncrease}>+</button>
            <span>{number}</span>
            <button onClick={handleDecrease}>-</button>
        </div>
    );
}

export default Counter;