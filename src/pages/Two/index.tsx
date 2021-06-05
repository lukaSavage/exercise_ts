import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from 'store/actions'
import TestHooks from './test-hooks'

interface Prop {
    calculateNum: number;
    increment(data: number): object;
    decrement(data: number): object;
}
const Connect: Function = connect;
@Connect((state: any) => ({ calculateNum: state.calculateNum }), {
    increment,
    decrement
})
class index extends Component<Prop, object> {
    handleClick = (tag: string) => {
        const { increment, decrement } = this.props
        return () => {
            if (tag === '+') {
                increment(1);
            } else {
                decrement(2);
            }
        }
    }
    render() {
        const { calculateNum } = this.props
        console.log(this.props);

        return (
            <>
                <h1>redux传过来的值是{calculateNum}</h1>
                <button onClick={this.handleClick('+')}>点我加1</button>
                <button onClick={this.handleClick('-')}>点我减2</button>
                <hr/>
                <div style={{width: 600, height: 600, background: '#eee'}}>
                    <h3>React Hooks 测试专用页面</h3>
                    <TestHooks></TestHooks>
                </div>
            </>
        );
    }
}

export default index;