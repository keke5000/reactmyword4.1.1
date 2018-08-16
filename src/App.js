import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import Home from "./components/Home";
import Route from "react-router-dom/es/Route";
import Navigation from "./Navigation";
import Grid from "react-bootstrap/es/Grid";
import NotFound from './NotFound';
import Sidebar from 'react-sidebar';
import CityList from './components/CityList';
import CountryList from "./components/CountryList";
import ReadCountry from "./components/ReadCountry";

class App extends Component {
    constructor(props) {
        super(props);
    //     this.state = {
    //         sidebarOpen: true
    //     };
    //     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    // onSetSidebarOpen(open) {
    //     this.setState({sidebarOpen: open});
    // }

    render() {
        return (
            <BrowserRouter>
                <div className="content">
                    <div className="jumbtron">
                        <Header/>
                    </div>
                    <hr/>
                    {/*<Sidebar*/}
                        {/*sidebar={<Navigation/>}*/}
                        {/*open={this.state.sidebarOpen}*/}
                        {/*onSetOpen={this.onSetSidebarOpen}*/}
                        {/*styles={{sidebar: {background: "white"}}}>*/}
                        {/*<button onClick={() => this.onSetSidebarOpen(true)}>*/}
                            {/*Open sidebar*/}
                        {/*</button>*/}
                    {/*</Sidebar>*/}
                    <Grid>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/citylist" component={CityList}/>
                            <Route path="/countrylist" component={CountryList}/>
                            <Route path="/readcountry/:code" name="readcountry" component={ReadCountry}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Grid>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;
