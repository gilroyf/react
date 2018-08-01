import React from 'react';

class customButtom extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = props.clickHandler;
    }

    render() {
        return (
              <button onClick={this.clickHandler}>{this.props.text}</button>            
        );
    }
}

export default customButtom;