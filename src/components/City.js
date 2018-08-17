import React, {Component} from 'react'
import Link from "react-router-dom/es/Link";

class City extends Component {
    render() {
        return (
                <tr>
                    <td>{this.props.city.name}</td>
                    <td>{this.props.city.countryName}</td>
                    <td>{this.props.city.population}</td>
                    <td><Link to={'/readcity/' + this.props.city.id}>Details</Link></td>

                </tr>
        )
    }
}

export default City;

//content
// 0
// id	3665
// name	"?ahty"
// district	"Rostov-na-Donu"
// population	221800
// countryName	"Russian Federation"
// countryCode	"RUS"