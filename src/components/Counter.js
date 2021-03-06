import React, { Component, PropTypes } from 'react'
import { increment } from '../AC/counter'
import { connect } from 'react-redux'
import WrapperComponent from './WrapperComponent'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    render() {
        return (
            <div>
                <h3>{this.props.count}</h3>
                <a href="#" onClick = {this.handleIncrement}>increment me</a>
                <WrapperComponent>
                    <h3>Hello world</h3>
                </WrapperComponent>
            </div>
        )
    }

    handleIncrement = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }
}

export default connect(state => ({
    count: state.count
}), {
    increment
})(Counter)