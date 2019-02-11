import React, { Component } from 'react';
import './Skills.scss';

class Skills extends Component {
    render() {
        return (
            <div className='skills form_single_block'>
                <p>Skills</p>
                <p1>please separate your skills with a coma</p1>
                <div className="input_container">
                    <textarea onChange={ this.props.skills } name="skills" id="skills_list" placeholder="please, separate your skills with comas"> </textarea>
                </div>
            </div>
        );
    }
}

export default Skills;
