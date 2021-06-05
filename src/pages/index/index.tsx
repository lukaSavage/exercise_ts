import React, { Component, createRef } from 'react';
import { Button } from 'antd'
import Modal from './Modal'

interface State {

}
class Index extends Component<any, State> {
    state = {
        isShowModel: false,
        demoString: 'wefefs'
    }
    click = ()=>{
        console.log(1111);
        
    }
    public get toUpcaseString() : string {
        return this.state.demoString.toUpperCase();
    }
    
    public get add() : string {
        return this.state.demoString + '~~~~~'
    }
    
    
    render() {
        const left = (
            <div style={{color: '#08e'}}>i'm left</div>
        )
        const center = (
            <div style={{color: '#f00'}}>i'm left</div>
        )
        const right = (
            <div style={{color: '#486'}}>i'm left</div>
        )
        return (
            <div>
                <div onClick={this.click}><Modal left={left} center={center} right={right}/></div>
                <h1>{ this.toUpcaseString }</h1>
                <h2 style={{ color: '#083' }}>{ this.add }</h2>
            </div>
        );
    }
}

export default Index;