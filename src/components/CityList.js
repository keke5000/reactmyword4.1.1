import React, {Component} from 'react'
import City from './City'

class CityList extends Component {
    //TODO Kannan rakenne mitkä halutaan näkyviin (tähän ehkä uusi kaupunki componentti)

    state = {
        cities: {content: []},
        page: 1
    };
    getCities = () => {
        var url = '/api/cities?page=' + (this.state.page - 1);
        console.log(url)
        fetch(url)
            .then((resp) => {
                console.log("Ollaan respissä --<-<-<-", resp);
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Väärin meni");
                }
            })
            .then((data) => {
                console.log("Tuleeko dataa???", data);
                this.setState({cities: data, page: (data.number + 1)})
                console.log(this.state)
            })
    };

    componentDidMount() {
        console.log("Ollaan componentMountissa");
        this.getCities();
    };

    changehandler = (e) => {
        this.setState({page: e.target.value});
    };

    refreshPage = (e) => {
        if (e.key === 'Enter') {
            this.getCities();
        }
    };

    previouspage = () => {
        var p = this.state.page;
        if (p !== 1) {
            this.setState({page: (p - 1)}, this.getCities);
        }
    };
    nextpage = () => {
        var p = this.state.page;
        console.log(p);
        if (p !== this.state.cities.totalPages) {
            this.setState({page: (p + 1)}, this.getCities);
        }
    };


    render() {
        var citiedData = this.state.cities.content;
        var citiesList = citiedData.map((city) => {
            return <City key={city.id} city={city}/>
        });
        return (
            <div>
                <p style={{textAlign: 'center', marginRight: '2em'}}>
                    Sivu:<br/>
                    <input style={{width: '2em'}} value={this.state.page} onChange={this.changehandler}
                           onKeyPress={this.refreshPage}/>
                    / {this.state.cities.totalPages}
                    <br/>
                    {this.state.page !== 1 &&
                    <button className="btn" onClick={this.previouspage}>Previous page</button>}
                    {this.state.page !== this.state.cities.totalPages &&
                    <button className="btn" onLoad={this.shownext} onClick={this.nextpage}>Next page</button>}
                </p>

                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Country</b></td>
                        <td><b>Population</b></td>
                        <td><b>Details</b></td>
                    </tr>
                    </thead>
                    <tbody>
                    {citiesList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CityList;