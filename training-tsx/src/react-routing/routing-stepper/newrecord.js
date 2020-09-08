import React from 'react'
import {useHistory} from 'react-router-dom'

class NewRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            previousLink: '/new_record',
            nextLink: '/new_record/step_1'
        }
    }
    
    render() {
        return (
           <div>
               Create New Record Here
               <br />
               { this.props.children } 
               <br />

               { this.state.page >= 1 && <a href={this.state.previousLink}>Previous Page</a> } 
               <br />
               { this.state.page < 3 && <a href={this.state.nextLink}> Next Page</a> }
           </div>
        )
    }

    componentDidMount() {
        const currentPage = this.props.children ? Number(this.props.location.pathname.split('').pop()) : 0;
        this.setState({
            page: currentPage,
            previousLink: currentPage === 1 ? '/new_record/' : `/new_record/step_${currentPage - 1}`,
            nextLink: currentPage === 3 ? '/new_record/step_3' : `/new_record/step_${currentPage + 1}`
        })
    }
}
export default NewRecord;