import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'

interface Props {
    words: any
}

interface State {
    test: string
}

class Main extends React.Component<Props, State> {
    constructor(props) {
        super(props)
    }

    public render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <Content/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Main
