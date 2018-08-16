import React, {Component} from 'react'

class UpdateCountry extends Component {

    componentDidMount() {
        fetch('/api/countries/' + this.props.match.params.code)
            .then(result => {
                // console.log("resu", result.json());
                return result.json();
            })
    }

    render(){
        return(
            <div className="countryform">
            <hr/>
            </div>
        )
    }

}

export default UpdateCountry;