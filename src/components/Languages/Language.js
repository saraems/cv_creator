import React, { Component } from 'react';

class Language extends Component {
    render() {
        return (
            <div className='language input_container'>
                <input onChange={ this.props.language } name="language" type="text" id={`language${ this.props.id }`}/>
                <select onChange={ this.props.proficiency } id={`languageProficiency${ this.props.id }`}>
                    <option>elementary</option>
                    <option>limited-working</option>
                    <option>professional-working</option>
                    <option>full-professional</option>
                    <option>native-or-bilingual</option>
                </select>
            </div>
        );
    }
}

export default Language;
