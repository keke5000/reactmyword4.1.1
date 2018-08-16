import React, {Component} from 'react'
// import City from './City'
import Link from "react-router-dom/es/Link";

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

    // siirry = (e) => {
    //     // e.preventDefault();
    //     console.log(e);
    //     localStorage.setItem("id", e);
    //     this.props.history.push('/readcountry/'+ e);
    // };

    render() {
        const maadata = this.state.maat.content;
        const maaelementit = maadata.map((maa) => {
            return (<tr key={maa.code}>
                <td>{maa.name}</td>
                <td>{maa.population}</td>
                {/*<td>{maa.localName}</td>*/}
                <td>{maa.capital ? maa.capital.name : '-'}</td>
                <td>{maa.continent}</td>
                {/*<td><a href="" onClick={this.siirry(maa.code)}>Read</a></td>*/}
                <td><Link to={'/readcountry/' + maa.code}>Read</Link></td>
            </tr>)
        });
        return (
            <div>
                <p style={{textAlign: 'right', marginRight: '2em'}}>Sivu: {this.state.maat.number+1} / {this.state.maat.totalPages}</p>
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Population</td>
                        {/*<td>Paikallinen</td>*/}
                        <td>Capital</td>
                        <td>Continent</td>
                        <td>READ</td>

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
    };
    näpytintäNäppäilty = (evt) => {
        if (evt.key === 'Enter') {
            this.haemaatfetch();
        }
    }
}
export default CountryList;