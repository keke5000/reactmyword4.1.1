import React, {Component} from 'react'

class ReadCountry extends Component {
    state = {country: []};

    componentDidMount() {
        this.getCountryData();
        this.getImageHeadOfState();
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
                itse.setState({country: olio});
            });
    };

    getImageHeadOfState() {
        var hakuurl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCRpR4LEhRMVAOr12kpayiEUbfGIT-cuX4&cx=008282869857669698649:vhsb_0llar8&q=lectures";
        fetch(hakuurl)
            .then(resp=>{
                return resp.json();
            })
            .then(olio=>{
                console.log(olio);
                // console.log(olio.items[0].pagemap.cse_image[0].src);
            });
    }


    render() {
        return (
            <div>
                <h2>{this.state.country.name}</h2>
                <div id="headofstate">.</div>
                <ul className='list-group'>
                    <li className="list-group-item">{this.state.country.code}</li>
                    <li className="list-group-item">{this.state.country.name}</li>
                    <li className="list-group-item">{this.state.country.continent}</li>
                    <li className="list-group-item">{this.state.country.region}</li>
                    <li className="list-group-item">{this.state.country.population}</li>
                    <li className="list-group-item">{this.state.country.headOfState}</li>
                    <li className="list-group-item">{this.state.country.code}</li>
                    <li className="list-group-item">{this.state.country.code}</li>
                    <li className="list-group-item">{this.state.country.code2}</li>
                </ul>
            </div>
        )
    }

}

export default ReadCountry;