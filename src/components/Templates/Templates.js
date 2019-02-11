import React, { Component } from 'react';
import './Templates.scss';
import { Link } from 'react-router-dom';

class Templates extends Component {


    chooseTemplate = (temp) => {
        localStorage.setItem('template', temp);
    };

    render() {

        return (
            <div className="main_page_container">
                <header>
                    <h2>Simplicity is the ultimate sophistication...</h2>
                    <p>
                        Choose yours resume template<br/>
                    </p>
                </header>
                <section className="templates_container">
                    <Link to="/data"><div onClick={ () => this.chooseTemplate('sides') } className="cv_template_container two_sides_template_icon"> </div></Link>
                    <Link to="/data"><div onClick={ () => this.chooseTemplate('min') } className="cv_template_container minimalistic_template_icon"> </div></Link>
                    <Link to="/data"><div onClick={ () => this.chooseTemplate('class')} className="cv_template_container classic_template_icon"> </div></Link>
                </section>
            </div>
        );
    }
}

export default Templates;
