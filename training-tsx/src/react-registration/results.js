import React from 'react'
class Result extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const allSchools = this.props.schools.map(entry =>
        <div>{entry.maxAge}</div>
        )
        return (
            <div>
                {allSchools ? allSchools : []}
            </div>
        )
    }
}
export default Result;