import React, {Component} from 'react'

class ReadCountry extends Component {
    state = {city: []};

    componentDidMount() {
        this.getCountryData();
    }

    getCountryData = () => {
        let itse = this;
        fetch('/api/countries/' + this.props.match.params.code)
            .then((resp) => {
                console.log("Haettu", resp);
                return resp.json();
            })
            .then((olio) => {
                console.log("Json parsittu", itse.state);
                itse.setState({city: olio},this.getImageHeadOfState);
            });
    };

    getImageHeadOfState() {
        var head = this.state.city.headOfState.toString().split(' ').join('_');
        console.log(head);
        var hakuurl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCRpR4LEhRMVAOr12kpayiEUbfGIT-cuX4&cx=008282869857669698649:vhsb_0llar8&q=" + head;
        fetch(hakuurl)
            .then(resp => {
                return resp.json();
            })
            .then(olio => {
                console.log(olio);
                console.log(olio.items[0].pagemap.cse_image[0].src);
                var kuva = document.createElement("img");
                kuva.setAttribute('src',olio.items[0].pagemap.cse_image[0].src);
                document.getElementById('headofstate').appendChild(kuva);
            });
    }


    render() {
        return (
            <div>
                <h2>{this.state.city.name}</h2>
                <div className="parent">
                    <div className="narrow">
                        <h3>Stats</h3>
                        <ul className='list-group'>
                            <li className="list-group-item">Code: {this.state.city.code}</li>
                            <li className="list-group-item">Name: {this.state.city.name}</li>
                            <li className="list-group-item">Continent: {this.state.city.continent}</li>
                            <li className="list-group-item">Region: {this.state.city.region}</li>
                            <li className="list-group-item">Population: {this.state.city.population}</li>
                            <li className="list-group-item">Head of State: {this.state.city.headOfState}</li>
                            {/*<li className="list-group-item">{this.state.country.governmentForm}</li>*/}
                            {/*<li className="list-group-item">{this.state.country.capital}</li>*/}
                            {/*<li className="list-group-item">{this.state.country.code2}</li>*/}
                        </ul>
                    </div>
                    <div className="wide">
                        <h3>{this.state.city.headOfState}</h3>
                        <div id="headofstate"></div>
                    </div>

                </div>
            </div>
        )
    }

}

export default ReadCountry;