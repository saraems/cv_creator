import React, { Component } from 'react';
import './Templates.scss';
import { Link } from 'react-router-dom';

class Templates extends Component {

    componentDidMount() {
        this.intervalId = setTimeout(() => {
            let content = document.body.querySelector('.main_page_content_container');
            content.classList.add('fade-appear-active')

        }, 20);
    }


    chooseTemplate = (temp) => {
        localStorage.setItem('template', temp);
    };

    render() {

        return (
            <div className="main_page_container">
                <div className="main_page_content_container fade-enter">
                    <header>
                        <h1>Simplicity</h1>
                        <h2> is the ultimate sophistication...</h2>
                        <h3>
                            Choose yours resume template<br/>
                        </h3>
                    </header>
                    <section className="templates_container">
                        <Link to="/cv_creator/data"><div onClick={ () => this.chooseTemplate('sides') } className="cv_template_container two_sides_template_icon"> </div></Link>
                        <Link to="/cv_creator/data"><div onClick={ () => this.chooseTemplate('min') } className="cv_template_container minimalistic_template_icon"> </div></Link>
                        <Link to="/cv_creator/data"><div onClick={ () => this.chooseTemplate('class')} className="cv_template_container classic_template_icon"> </div></Link>
                    </section>
                </div>
            </div>
        );
    }
}

export default Templates;
