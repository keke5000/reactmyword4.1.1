import React, {Component} from 'react'

class ReadCountry extends Component {

    componentDidMount() {
        fetch('/api/countries/' + this.props.match.params.code)
            .then(result => {
                // console.log("resu", result.json());
                return result.json();
            })
    }

    render(){
        return(
            <hr/>
        )
    }

}

export default ReadCountry;