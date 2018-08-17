import React, {Component} from 'react'

class UpdateCountry extends Component {

    componentDidMount() {
        fetch('/api/countries/' + this.props.match.params.code)
            .then(result => {
                // console.log("resu", result.json());
                return result.json();
            })
    }

    handleNameChange = (event) => {
        this.setState({ author: event.target.value })
    }

    handleCreateClick = (e) => {
        e.preventDefault();
            this.setState({ quotetext: '', author: '', formErrors: { text: '', author: '' } });
    }

    render(){
        return(
            <div className="countryform">
                <form className="country">
                    <input type="text" placeholder="Country" id="form_name" minLength="1" className="form-control"
                           value={this.state.name} onChange={this.handleNameChange} />
                    <input type="text" placeholder="Code" id="form_code" minLength="1" className="form-control"
                           value={this.state.code} onChange={this.handleCodeChange} />
                    <input type="text" placeholder="Population" id="form_popul" minLength="1" className="form-control"
                           value={this.state.population} onChange={this.handlePopulChange} />
                    <input type="text" placeholder="HeadOfState" id="form_headofstate" minLength="1" className="form-control"
                           value={this.state.headofstate} onChange={this.handleHeadofstateChange} />
                    <div>
                        <input type="submit" value="Update" onClick={this.handleCreateClick} className="form-control btn-primary" />
                    </div>
                </form>
            <hr/>
            </div>
        )
    }

}

export default UpdateCountry;