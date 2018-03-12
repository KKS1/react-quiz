import React, {Component} from 'react';

class UserInputForm extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        let userAnswered = event.target.value;
        this.props.onAnswer(userAnswered);
    }

    render() {
        return (
            <form className="UserInputForm">
                <label><input type="radio" name="checkbox" value="True" onChange={this.onChange} />True</label>
                <label><input type="radio" name="checkbox" value="False" onChange={this.onChange} />False</label>
            </form>
        )        
    }
}

export default UserInputForm