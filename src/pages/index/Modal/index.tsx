import React, { ReactElement, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from 'antd'

import './index.less'
interface Props {
    left: any,
    center: any,
    right: any
}

export default function Modal(props: Props): ReactElement {
    const { left, center, right } = props
    const [baseComputed, setBaseComputed] = useState('TEWDFS')
    /* 方法 */
    function varies(val: string) {
        return function(){
            setBaseComputed(val);
        }
    }
    /* 计算属性 */
    const handle = baseComputed.toUpperCase();
    const add = baseComputed + '~~~~';
    useEffect(() => {
        console.log(handle);
        console.log(add);
        

    }, [baseComputed, add, handle])
    return (
        <div className="container">
            <div className="left">{left}</div>
            <div className="center">{center}</div>
            <div className="right">{right}</div>

            <Button onClick={varies('rweer')}>点我测试</Button>
            <h1>{baseComputed}</h1>
            <h3>{add}</h3>
        </div>
    )
}
