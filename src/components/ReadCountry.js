import React, {Component} from 'react'

class ReadCountry extends Component {
    state = {country: []};

    componentDidMount() {
        this.getCountryData();
        this.getImageHeadOfState();
    }

    getCountryData = () => {
        let itse = this;
        fetch('/api/countries/' + this.props.match.params.code)
            .then((resp) => {
                console.log("Haettu", resp);
                return resp.json();
            })
            .then((olio) => {
                console.log("Json parsittu", itse.state);
                itse.setState({country: olio});
            });
    };

    getImageHeadOfState() {
        var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON(flickerAPI, {
            tags: "bird",
            tagmode: "any",
            format: "json"
        })
            .done(function (data) {
                $.each(data.items, function (i, item) {
                    $("<img/>").attr("src", item.media.m).appendTo("#headofstate");
                    if (i === 8) {
                        return false;
                    }
                });
            });
    }

// var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
// // var flickerAPI = 'https://rata.digitraffic.fi/api/v1/live-trains/';
// console.log('kojuibnj');

// fetch(flickerAPI, {
//     // tags: this.state.country.headOfState,
//     tags: "bird",
//     tagmode: "any",
//     format: "json",
//     mode: 'no-cors'
// })
//     .then(data => {
//         console.log("Pöö");
//         console.log(data);
//         return data.json();
//     })
//     .then(olio => {
//         // document.getElementById('headofstate').innerText = olio[3].trainNumber;
//         console.log(olio);
//     })

// let url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&format=json&nojsoncallback=true';
// let itse = this;
// fetch(url)
//     .then((resp) => {
//         console.log("Haettu", resp);
//         return resp.json();
//     })
//     .then((olio) => {
//         console.log("Json joujou", itse.state);
//         itse.setState({country: olio});
//     });
// (function() {
//     var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//     $.getJSON( flickerAPI, {
//         tags: "bird",
//         tagmode: "any",
//         format: "json"
//     })
//         .done(function( data ) {
//             $.each( data.items, function( i, item ) {
//                 $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
//                 if ( i === 8 ) {
//                     return false;
//                 }
//             });
//         });
// })();
// }

    render() {
        return (
            <div>
                <h2>{this.state.country.name}</h2>
                <div id="headofstate">.</div>
                <ul className='list-group'>
                    <li className="list-group-item">{this.state.country.code}</li>
                    <li className="list-group-item">{this.state.country.name}</li>
                    <li className="list-group-item">{this.state.country.continent}</li>
                    <li className="list-group-item">{this.state.country.region}</li>
                    <li className="list-group-item">{this.state.country.population}</li>
                    <li className="list-group-item">{this.state.country.headOfState}</li>
                    <li className="list-group-item">{this.state.country.code}</li>
                    <li className="list-group-item">{this.state.country.code}</li>
                    <li className="list-group-item">{this.state.country.code2}</li>
                </ul>
            </div>
        )
    }

}

export default ReadCountry;