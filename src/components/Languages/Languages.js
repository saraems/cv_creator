import React, { Component } from 'react';
import './Languages.scss';
import Language from "./Language";




class Languages extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            languages: [1],
        })
    }

    addLang = () => {

        this.setState({
            languages: [...this.state.languages, 1],
        });
    };



    render() {
        return (
            <div className='languages form_single_block'>
                <p>Languages</p>
                { this.state.languages.map((item, index ) => <Language id={index+1} language={ this.props.language } proficiency={ this.props.proficiency }/>) }
                <button onClick={ () => {this.props.createLanguageObj(); this.addLang()} } className='add_resume_info' id="add_new_language_field"> Add next language </button>
            </div>
        );
    }
}

export default Languages;
