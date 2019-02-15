import React, { Component } from 'react';
import './App.scss';
import Home from './../Home/Home';
import Templates from './../Templates/Templates';
import DataSource from './../DataSource/DataSource';
import ResumeForm from './../ResumeForm/ResumeForm';
import Resume from './../Resume/Resume';
import NotFound from './../NotFound/NotFound';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route render={ ({location}) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={450}
                                className='fade'
                            >
                                <Switch location={location}>
                                    <Route exact path="/cv_creator/" component={Home}/>
                                    <Route path="/templates" component={Templates}/>
                                    <Route path="/data" component={DataSource}/>
                                    <Route path="/form" component={ResumeForm} />
                                    <Route path="/resume" component={Resume} />
                                    <Route path="*" component={NotFound}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                        )
                    }/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
