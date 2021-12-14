import { useEffect } from 'react';
import { useState } from "react";
import Counter from '../components/Counter'

function CounterGroup(props){
    const [counterList, setCounterList] = useState([]);

    useEffect(() => {
        const counterList = new Array(props.size).fill(Date.now());
        setCounterList(counterList);
    }, [props.size]);

    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index}></Counter>
            ))}
        </div>
    );
}

export default CounterGroup;