import React from 'react';

class SchoolLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolName: "",
            classes: 0,
            hasAircon: false,
            isDataSubmitted: false,
            userName: "",
            userpassword: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSchoolDataSubmit = this.handleSchoolDataSubmit.bind(this);
        this.handleUserLoginSubmit = this.handleUserLoginSubmit.bind(this);
        this.removePreviousRecord = this.removePreviousRecord.bind(this);
    }
    render() {
        return (
            <div>
                {this.state.isDataSubmitted ? 
                <div class="padded">
                    <form name="userLogin" onSubmit={this.handleUserLoginSubmit}>
                        <label>
                            Username:
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>
                            Password:
                        <input type="password" name="userpassword" value={this.state.userpassword} onChange={this.handleChange} />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div> 
                :
                <div class="padded">
                    <form name="schoolData" onSubmit={this.handleSchoolDataSubmit}>
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
                    <button type="button" onClick={this.removePreviousRecord}>Remove Previous Record</button>
                </div>
                }
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

    handleSchoolDataSubmit(event) {
        let schooldata = {
            schoolName: this.state.schoolName,
            classes: this.state.classes,
            hasAircon: this.state.hasAircon
        }

        localStorage.setItem("School Record", JSON.stringify(schooldata));
        window.alert("Use admin/adminRoot as username and password to view data");

        this.setState({
            schoolName: "",
            classes: 0,
            hasAircon: false,
            isDataSubmitted: true,
            username: "",
            password: ""
        });
        event.preventDefault();
    }

    handleUserLoginSubmit(event) {
        if (this.state.username === 'admin' && this.state.userpassword === 'adminRoot'){
            const schoolData = JSON.parse(localStorage.getItem("School Record"));
            this.setState({
                schoolName: schoolData.schoolName,
                classes: schoolData.classes,
                hasAircon: schoolData.hasAircon,
                isDataSubmitted: false,
                username: "",
                userpassword: ""
            });
        }
        else {
            window.alert("Invalid login details!")
        }
        event.preventDefault();
    }

    removePreviousRecord() {
        localStorage.removeItem("School Record");
        window.alert("Previous school record removed!");
    }

}

export default SchoolLogin;