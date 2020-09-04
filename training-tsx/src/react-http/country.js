import React from 'react'
import CountryList from './country-list';

class Country extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <ul>
                    <CountryList />
                </ul>
            </div>
        )
    }
}
export default Country;