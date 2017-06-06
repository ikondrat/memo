import React from 'react'
import {MuiThemeProvider} from "material-ui/styles";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

interface Props {
    words: any;
}

interface State {
}

class Main extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;