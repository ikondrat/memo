import React from 'react'
import ReactDOM from 'react-dom'
import Main from 'app/components/Main'

const data = {
    title: "ololo",
    wordSets: [
        {
            title: "Cards1",
            list: [

            ]
        }
    ]
};

ReactDOM.render(<Main words={data}/>, document.getElementById('app'));