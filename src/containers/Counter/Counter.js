import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux'

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
                    <button onClick={this.props.onAddToStore}>Add To Store</button>
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
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD', payload: { val: 10 } }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT', payload: { val: 10 } }),
        onAddToStore: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteFromStore: (id) => dispatch({ type: 'DELETE_RESULT', id: id })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);