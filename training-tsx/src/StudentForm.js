import React from 'react';

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: "",
            classes: 0,
            hasAircon: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div class="padded">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        School Name:
                        <input type="text" name="schoolName" value={this.state.schoolName} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Number of Classes:
                        <input type="text" name="classes" value={this.state.classes} onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Has Aircon:
                        <input type="radio" name="hasAircon" value="true" checked={this.state.hasAircon === true} onChange={this.handleChange} />
                        <input type="radio" name="hasAircon" value="false" checked={this.state.hasAircon === false} onChange={this.handleChange} />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: event.target.type === 'radio' ? value === 'true' : value
        });
    }

    handleSubmit(event) {
        localStorage.setItem("School Record", JSON.stringify(this.state));
        this.state = {
            schoolName: "",
            classes: 0,
            hasAircon: false
        };
        event.preventDefault();
    }

}

export default StudentForm;