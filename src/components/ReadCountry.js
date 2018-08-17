import React, {Component} from 'react'

class ReadCountry extends Component {
    state = {country: []};

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
                itse.setState({country: olio},this.getImageHeadOfState);
            });
    };

    getImageHeadOfState() {
        console.log(this.state.country.headOfState);
        if (this.state.country.headOfState==='') {
            var head = "kova_aija";
            this.state.country.headOfState = 'Kova aija';
            this.setState(this.state);
            // this.setState({country: {headOfState:'Kova aija'}});
        } else {
            var head = this.state.country.headOfState.toString().split(' ').join('_');
        }

        var head = this.state.country.headOfState.toString().split(' ').join('_');
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
                <h2>{this.state.country.name}</h2>
                <div className="parent">
                    <div className="narrow">
                        <h3>Stats</h3>
                        <ul className='list-group'>
                            <li className="list-group-item">Code: {this.state.country.code}</li>
                            <li className="list-group-item">Name: {this.state.country.name}</li>
                            <li className="list-group-item">Continent: {this.state.country.continent}</li>
                            <li className="list-group-item">Region: {this.state.country.region}</li>
                            <li className="list-group-item">Population: {this.state.country.population}</li>
                            <li className="list-group-item">Head of State: {this.state.country.headOfState}</li>
                            {/*<li className="list-group-item">{this.state.country.governmentForm}</li>*/}
                            {/*<li className="list-group-item">{this.state.country.capital}</li>*/}
                            {/*<li className="list-group-item">{this.state.country.code2}</li>*/}
                        </ul>
                    </div>
                    <div className="wide">
                        <h3>{this.state.country.headOfState}</h3>
                        <div id="headofstate"></div>
                    </div>

                </div>
            </div>
        )
    }

}

export default ReadCountry;