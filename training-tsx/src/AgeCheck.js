import React from 'react';

class Hello extends React.Component {
   render () {

       return (
           <div>
                <span>You are a </span><b>{checkAge(this.props.value, this.props.unit)}</b>
            </div>
        )

        function checkAge(age, unit) {
            switch (unit) {
                default: 
                case 'yr': {
                    if (age >= 1 && age <= 3) {
                        return 'Toddler';
                    } else if (age >= 3 && age <= 5) {
                        return 'Preschool';
                    } else if (age >= 5 && age <= 12) {
                        return 'Gradeschooler';
                    } else if (age >= 12 && age <= 18) {
                        return 'Teen';
                    } else {
                        return 'Young Adult';
                    }
                }
                case 'month': {
                    return 'Baby';
                }
            }
        }
   }
}

export default Hello;