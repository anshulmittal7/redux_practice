import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter} />
                <div>
                    <button onClick={() => this.props.onAddToStore(this.props.ctr)}>Add To Store</button>
                    <ul>
                        {this.props.storedResults.map(el => {
                            return (
                                <li key={el.key} onClick={() => this.props.onDeleteFromStore(el.key)}>
                                    {el.val}
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, payload: { val: 10 } }),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, payload: { val: 10 } }),
        onAddToStore: (res) => dispatch({ type: actionTypes.STORE_RESULT, result: res }),
        onDeleteFromStore: (id) => dispatch({ type: actionTypes.DELETE_RESULT, id: id })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);