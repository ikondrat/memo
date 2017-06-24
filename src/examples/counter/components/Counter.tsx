import React, { Component } from 'react'
import {RaisedButton, Paper} from 'material-ui'
import styled from 'styled-components';

const StyledButton = styled(RaisedButton)`
    margin: 20px
`;
const StyledPaper = styled(Paper)`
    padding: 10px 20px;
`;

interface Props {
    value: number,
    l10n: any,
    onIncrement(),
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
        const { l10n, value, onIncrement, onDecrement } = this.props
        return (
            <StyledPaper zDepth={2} rounded={false}>
                {l10n.clicked}: {value} {l10n.times}
                <StyledButton label={l10n.plus} onClick={onIncrement}/>
                <StyledButton label={l10n.minus} onClick={onDecrement}/>
                <StyledButton label={l10n.oddOnly} onClick={this.incrementIfOdd}/>
                <StyledButton label={l10n.asyncAdd} onClick={this.incrementAsync}/>
            </StyledPaper>
        )
    }
}

export default Counter