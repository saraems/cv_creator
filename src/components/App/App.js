import React, { Component } from 'react';
import './App.scss';
import Home from './../Home/Home';
import Templates from './../Templates/Templates';
import DataSource from './../DataSource/DataSource';
import ResumeForm from './../ResumeForm/ResumeForm';
import Resume from './../Resume/Resume';
import NotFound from './../NotFound/NotFound';
import { HashRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/templates" component={Templates}/>
                        <Route path="/data" component={DataSource}/>
                        <Route path="/form" component={ResumeForm} />
                        <Route path="/resume" component={Resume} />
                        <Route path="*" component={NotFound}/>
                    </Switch>
            </HashRouter>
        );
    }
}

export default App;
