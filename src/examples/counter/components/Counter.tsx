import React, { Component } from 'react'
import {RaisedButton, Paper} from 'material-ui'
import styled from 'styled-components';

const style = {
    margin: 12,
};

const StyledButton = styled(RaisedButton)`
    margin: 20px
`;
const StyledPaper = styled(Paper)`
    padding: 10px 20px;
`;


interface Props {
    value: number
    onIncrement()
    onDecrement()
}

interface State {
    test: string
}

class Counter extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <StyledPaper zDepth={2} rounded={false} >
                Clicked: {value} times
                <StyledButton label="+" style={style} onClick={onIncrement}/>
                <StyledButton label="-" style={style} onClick={onDecrement}/>
                <StyledButton label="Increment if odd" style={style} onClick={this.incrementIfOdd}/>
                <StyledButton label="Increment async" style={style} onClick={this.incrementAsync}/>
            </StyledPaper>
        )
    }
}

export default Counter