import React, {Component} from 'react'
// import City from './City'
import Link from "react-router-dom/es/Link";

class CountryList extends Component {
    state = {
        maat: {content: []},
        page: 1
    };

    componentDidMount() {
        this.haemaatfetch();
    }


    haemaatfetch = () => {
        let itse = this;
        const url = '/api/countries/paginated?page=' + (this.state.page - 1);
        fetch(url)
            .then((resp) => {
                console.log("Haettu", resp);
                return resp.json();
            })
            .then((olio) => {
                console.log("Json parsittu", itse.state);
                itse.setState({maat: olio, page: olio.number + 1});
            });
    };

    changehandler = (e) => {
        this.setState({page: e.target.value});
    };

    refreshPage = (e) => {
        if (e.key === 'Enter') {
            this.haemaatfetch();
        }
    };

    previouspage = () => {
        var p = this.state.page;
        if (p !== 1) {
            this.setState({page: (p - 1)}, this.haemaatfetch);
        }
    };
    nextpage = () => {
        var p = this.state.page;
        console.log(p);
        if (p !== this.state.maat.totalPages) {
            this.setState({page: (p + 1)}, this.haemaatfetch);
        }
    };


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
                <p style={{textAlign: 'center', marginRight: '2em'}}>
                    Sivu:<br/>
                    <input value={this.state.page} onChange={this.changehandler} onKeyPress={this.refreshPage}/>
                    / {this.state.maat.totalPages}
                    <br/>
                    {this.state.page !== 1 && <button onClick={this.previouspage}>Previous page</button>}
                    {this.state.page !== this.state.maat.totalPages &&
                    <button onLoad={this.shownext} onClick={this.nextpage}>Next page</button>}
                </p>
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
            </div>
        );
    }
}

export default CountryList;