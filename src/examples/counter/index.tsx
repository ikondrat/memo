import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('app')

import injectTapEventPlugin from 'react-tap-event-plugin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

const l10n = {
    "plus" : "+",
    "minus": "-",
    "oddOnly": "Increment if odd",
    "asyncAdd": "Increment async",
    "clicked": "Clicked",
    "times": "times"
};

const render = () => ReactDOM.render(
    <MuiThemeProvider>
        <div>
            <Counter
                l10n={l10n}
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />
        </div>
    </MuiThemeProvider>,
    rootEl
)

render()
store.subscribe(render)