import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div className="education form_single_block">
                <div className="input_container">
                    <label htmlFor='schoolName_x'>University</label>
                    <input onChange={ this.props.schoolName } name="schoolName" type="text" id="schoolName_x"/>
                </div>
                <div className="input_container">
                    <label htmlFor='fieldOfStudy_x'>Field of study</label>
                    <input onChange={ this.props.fieldOfStudy } name="fieldOfStudy_x" type="text" id="fieldOfStudy_x"/>
                </div>
                <div className="input_container">
                    <label htmlFor='fieldOfStudy_x'>Year of beginning</label>
                    <input onChange={ this.props.startDate } name="startDate" type="number" id="startDate_x"/>
                </div>
                <div className="input_container">
                    <label htmlFor='endDate'>Graduation year</label>
                    <input onChange={ this.props.endDate } name="endDate" type="number" id="endDate_x"/>
                </div>
                <div className="input_container">
                    <label htmlFor='degree'>Obtained degree</label>
                    <input onChange={ this.props.degree } name="degree" type="text" id="degree_x"/>
                </div>
            </div>
        );
    }
}

export default Education;
