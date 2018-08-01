import React from'react'
import ReactDOM from 'react-dom'
import CustomText from './customText'
import SomeButtom from './customButton'

console.log("in app.js");

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            buttonText: props.buttonText
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        console.log(this);
        this.setState((prevState) => ({
            buttonText: prevState.buttonText + 'A'
        }));
        alert(this.state.buttonText)
    }

    render(props) {
        console.log();
        return (<div>
            <h1>Hello {this.props.name}!!!</h1>
            <p>Hello world</p>
            <CustomText text="test" />  
            <SomeButtom clickHandler={this.clickHandler}  text={this.state.buttonText} />
        </div>);
    }
}

ReactDOM.render(<HelloWorld name={"Gilroy Fernandes"} buttonText="Help"/>, document.getElementById('root') );