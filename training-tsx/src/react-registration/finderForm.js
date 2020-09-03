import React from 'react'

class Finder extends React.Component {
    constructor(props) {
        super(props)
    }
    handleFullNameChange = (e) => {
        this.props.onFullnameChange(e.target.value)
    }
    handleAgeChange = (e) => {
        this.props.onAgeChange(e.target.value)
    }
    handleAirconChange = (e) => {
        this.props.onAirconChange(e.target.checked)
    }
    handleParentControl = (e) => {
        this.props.onParentControlChange(e.target.checked)
    }
    render() {
        return (
            <div>
                FullName: <input value={this.props.info.fullName} onChange={this.handleFullNameChange} />
                Age: <input value={this.props.info.age} onChange={this.handleAgeChange} />
                Needs Aircon: <input type="checkbox" value={this.props.info.needsAircon} onChange={this.handleAirconChange} />
                Parential Control: <input type="checkbox" value={this.props.info.parentControl} onChange={this.handleParentControl} />
            </div>
        )
    }
}
export default Finder;