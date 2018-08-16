import React, {Component} from 'react'

class City extends Component {
    render() {
        console.log("Ollaan cityssa", this.props);
        // let city = this.props.city;
        return (
                <tr className="name"><td>{this.props.city.name}</td></tr>
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