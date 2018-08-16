import React, {Component} from 'react'
import City from './City'

class CityList extends Component {
    //TODO Kannan rakenne mitkä halutaan näkyviin (tähän ehkä uusi kaupunki componentti)

    state = {
        cities: {content: []},
        page: 1
    };

    componentDidMount() {
        console.log("Ollaan componentMountissa");
        var self = this;
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
                self.setState({cities: data, page: (data.number + 1)})
                console.log(this.state)
            })
    };

    changehandler = (e)=>{
        console.log(e);
    };

    render() {
        var citiedData = this.state.cities.content;
        var citiesList = citiedData.map((city) => {
            return <City key={city.id} city={city}/>
        });
        return (
            <div>
                <p style={{textAlign: 'center', marginRight: '2em'}}>
                    Sivu:
                    <input value={this.state.cities.number+1} onChange={this.changehandler}/>
                    / {this.state.cities.totalPages}</p>
                <table className='table-striped table-hover table-bordered'>
                    <thead>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Country</b></td>
                        <td><b>Population</b></td>
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