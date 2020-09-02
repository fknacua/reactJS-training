import React from 'react';

class Hello extends React.Component {
   render () {

       return (
           <div>
                <span>Hello there!</span>
                <h1>
                    {this.props.name}
                </h1>
            </div>
        )
   }
}

export default Hello;