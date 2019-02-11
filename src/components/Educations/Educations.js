import React, { Component } from 'react';
import './Educations.scss';
import Education from './Education'

class Educations extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            educations: [1],
        })
    }

    addEdu = (e) => {

        this.setState({
            educations: [...this.state.educations, 1],
        });
    };

    render() {
        return (
            <div className="educations form_single_block">
                <p>Education</p>
                { this.state.educations.map((item, index ) => <Education id={index+1} schoolName={ this.props.schoolName } fieldOfStudy={ this.props.fieldOfStudy } startDate={ this.props.startDate }  endDate={ this.props.endDate } degree={ this.props.degree }/>) }
                <button onClick={ () => { this.addEdu(); this.props.createEducationObj() } } className='add_resume_info' id="add_new_education_field_x"> Add next school</button>
            </div>
        );
    }
}

export default Educations;


