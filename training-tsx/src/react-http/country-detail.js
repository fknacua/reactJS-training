import React from 'react'


class CountryDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            countryName: '',
            countryCapital: '',
            error: false, 
        };
    }
    render() {
        return (
            <span>
                {this.state.countryName} - {this.state.countryCapital} - <a href={this.state.flag}>flag</a>
            </span>
        )
    }

    componentWillMount = async () => {
        await this.getCountryDetail();
    }

    getCountryDetail() {
        const requestOptions = {
            method: "GET"
        };

        fetch("https://restcountries.eu/rest/v2/alpha/" + this.props.countryCode, requestOptions)
            .then(response => response.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        countryName: result.name,
                        countryCapital: result.capital,
                        flag: result.flag
                    });
                },
                error => {
                    debugger;
                    this.setState({
                        isLoaded: true,
                        error: true
                    });
                }
            )
    }
}
export default CountryDetail;