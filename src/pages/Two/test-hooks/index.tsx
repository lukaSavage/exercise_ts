import React, { useState, useEffect } from 'react'

interface Props {

}

const TestHooks = (props: Props) => {
    let [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('我触发了~');
        return ()=>{
            console.log('我相当于是componentWillUnmount');
            
        }
    }, [count])


    function click(): void {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={click}>点我加1</button>
            <h1>useState拿到的值为<span style={{ color: '#f90' }}>{count}</span></h1>

        </div>
    )
}

export default TestHooks
