import React, { Component } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {

        return (
            <div className="main_page_container">
                <header>
                    <h1>Create your resume</h1>
                    <p>
                        Use our templates and create a beautiful resume in minutes. Make recruiter spot your Curriculum
                        Vitae among the others.
                    </p>
                </header>
                <section className="btns_container">
                    <Link to="/templates"><button className="selection_btn choose_template"> Choose a template</button></Link>
                </section>
            </div>
        );
    }
}

export default Home;
