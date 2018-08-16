import React, {Component} from 'react'
import City from './City'

class CountryList extends Component {
    state = {
        maat: {content: []},
        sivu: 1
    };

    componentDidMount() {
        this.haemaatfetch();
    }


    haemaatfetch = () => {
        let itse = this;
        const url = '/api/countries/paginated?page='+(this.state.sivu-1);
        fetch(url)
            .then((resp) => {
                console.log("Haettu", resp);
                return resp.json();
            })
            .then((olio)=> {
                console.log("Json parsittu", itse.state);
                itse.setState({maat: olio, sivu: olio.number+1});
            });
    };

    render() {
        const maadata = this.state.maat.content;
        const maaelementit = maadata.map((maa) => {
            return <tr key={maa.code}>
                <td>{maa.name}</td>
                <td>{maa.localName}</td>
                <td>{maa.continent}</td>
                <td>{maa.capital ? maa.capital.name : '-'}</td>
                <td>{maa.population}</td>
            </tr>
        });
        return (
            <div>
                <button>   </button>
                <p style={{textAlign: 'right', marginRight: '2em'}}>Sivu: {this.state.maat.number+1} / {this.state.maat.totalPages}</p>
                <table className='table-striped table-hover table-bordered'>
                    <thead>
                    <tr>
                        <td>Nimi</td>
                        <td>Paikallinen</td>
                        <td>Maanosa</td>
                        <td>Pääkaupunki</td>
                        <td>Asukasluku</td>
                    </tr>
                    </thead>
                    <tbody>{maaelementit}</tbody>
                </table>

                <hr/>

                <input value={this.state.sivu} onChange={this.muutasivu} onKeyPress={this.näpytintäNäppäilty}/>
                <button type='button' onClick={this.haemaatfetch}>Hae sivu</button>
            </div>
        );
    }
    muutasivu = (evt) => {
        this.setState({sivu: evt.target.value});
    }
    näpytintäNäppäilty = (evt) => {
        if (evt.key === 'Enter') {
            this.haemaatfetch();
        }
    }
}
export default CountryList;