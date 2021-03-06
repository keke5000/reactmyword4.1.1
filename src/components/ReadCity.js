import React, {Component} from 'react'

class ReadCountry extends Component {
    state = {city: {}};

    componentDidMount() {
        this.getCityData();
    }

    getCityData = () => {
        let itse = this;
        console.log("jee", this.props.match.params.id);
        fetch('/api/cities/' + this.props.match.params.id)
            .then((resp) => {
                return resp.json();
            })
            .then((olio) => {
                console.log("olio", olio);
                // console.log("Json parsittu", itse.state);
                itse.setState({city: olio}, this.getImageHeadOfCity);
            })
    };

    getImageHeadOfCity() {
        var head = this.state.city.name.toString().split(' ').join('_');
        console.log("head", head);
        var hakuurl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCRpR4LEhRMVAOr12kpayiEUbfGIT-cuX4&cx=008282869857669698649:vhsb_0llar8&q=" + head;
        fetch(hakuurl)
            .then(resp => {
                return resp.json();
            })
            .then(olio => {
                console.log(olio);
                console.log(olio.items[0].pagemap.cse_image[0].src);
                var kuva = document.createElement("img");
                kuva.setAttribute('src', olio.items[0].pagemap.cse_image[0].src);
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
                            {/*<li className="list-group-item">ID: {this.state.city.id}</li>*/}
                            <li className="list-group-item">City Name: {this.state.city.name}</li>
                            <li className="list-group-item">Population: {this.state.city.population}</li>
                            {/*<li className="list-group-item">District: {this.state.city.dictrict}</li>*/}
                            <li className="list-group-item">Country Code: {this.state.city.countryCode}</li>
                            {/*<li className="list-group-item">Head of State: {this.state.city.headOfState}</li>*/}
                            {/*<li className="list-group-item">{this.state.city.governmentForm}</li>*/}
                            {/*<li className="list-group-item">{this.state.city.capital}</li>*/}
                            {/*<li className="list-group-item">{this.state.city.code2}</li>*/}
                        </ul>
                    </div>
                    <div className="wide">
                        <h3>{this.state.city.name}</h3>
                        <div id="headofstate"></div>
                    </div>

                </div>
            </div>
        )
    }

}

export default ReadCountry;