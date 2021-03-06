import React from 'react'
import ReactDOM from 'react-dom'

import Main from 'app/components/Main'
import injectTapEventPlugin from 'react-tap-event-plugin'

const data = {
    title: 'ololo',
    wordSets: [
        {
            title: 'Cards1',
            list: [

            ],
        },
    ],
}

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

ReactDOM.render(<Main words={data}/>, document.getElementById('app'))
