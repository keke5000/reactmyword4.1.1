import React, {Component} from 'react'

class UpdateCountry extends Component {
    state = {country: []};

    componentDidMount() {
        this.getCountryData();
    }

    getCountryData = () => {
        let itse = this;
        fetch('/api/countries/' + this.props.match.params.code)
            .then((resp) => {
                return resp.json();
            })
            .then((olio) => {
                itse.setState({country: olio});
            });
    };

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleCodeChange = (event) => {
        this.setState({ code: event.target.value })
    }

    handlePopulationChange = (event) => {
        this.setState({ population: event.target.value })
    }

    handleHeadofstateChange = (event) => {
        this.setState({ headOfState: event.target.value })
    }

    handleCreateClick = (e) => {
        e.preventDefault();
            this.setState({ code: '', name: '', population: '', headOfState: '' });
    }

    render(){
        return(
            <div className="countryform">
                <h2>{this.state.country.name}</h2>
                <div className="parent">
                    <div className="narrow">
                        <h3>Update country</h3>
                        <form className="country">
                            <input type="text" id="form_name" minLength="1"
                                   value={this.state.country.name} onChange={this.handleNameChange}/>
                            <input type="text" id="form_code" minLength="1" value={this.state.country.code}
                                   onChange={this.handleCodeChange}/>
                            <input type="text" id="form_population" minLength="1"
                                   value={this.state.country.population} onChange={this.handlePopulationChange}/>
                            <input type="text" id="form_headofstate" minLength="1"
                                   value={this.state.country.headOfState} onChange={this.handleHeadofstateChange}/>
                            <div>
                                <input type="submit" value="Update" onClick={this.handleCreateClick}
                                       className="form-control btn-primary"/>
                            </div>
                        </form>
                        <hr/>
                    </div>
                </div>
            </div>
        )
    }

}

export default UpdateCountry;