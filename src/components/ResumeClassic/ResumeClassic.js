import React, { Component } from 'react';
import './ResumeClassic.scss';

class ResumeClassic extends Component {

    render() {

        console.log(this.props.personData);

        return (
            <div className="template_classic" id="myMm">
                <header>

                    <h1> { this.props.personData.firstName } { this.props.personData.lastName } </h1>
                    <p> { this.props.personData.headline } </p>
                </header>
                <main>
                    <div className="left_panel">
                        {/*<div className="template_classic_info_box icon">*/}
                            {/*<i className="fas fa-user-circle"> </i>*/}
                        {/*</div>*/}
                        <div className='template_classic_info_box contact'>
                            <h1>Contact</h1>
                            <p>{ this.props.personData.phoneNumber }</p>
                            <h4>{ this.props.personData.email }</h4>
                        </div>
                        <div className='template_classic_info_box education'>
                            <h1>Education</h1>
                            { this.props.personData.educations.map((item, index) => {
                                return (
                                    <div id={index} className='template_classic_education_field'>
                                        <h3> { item.schoolName } </h3>
                                        <p> { item.degree } in { item.fieldOfStudy } </p>
                                        <h4> { item.startDate } - { item.endDate }</h4>
                                    </div>
                                )
                            }) }
                        </div>
                        <div className='template_classic_info_box expertise'>
                            <h1>Expertise</h1>
                            <div className='template_classic_skills_container'>
                                <h3>Skills</h3>
                                { this.props.personData.skills.map((item) => <p> { item.skill } / </p> ) }
                            </div>

                            <div className='template_classic_languages_container'>
                                <h3>Languages</h3>

                                { this.props.personData.languages.map((item) => <p><span>{ item.language }:</span> { item.proficiency }</p>) }

                            </div>
                        </div>
                    </div>
                    <div className="right_panel">
                        <div className="template_classic_profile">
                            <h1>Profile</h1>
                            <p> { this.props.personData.summary } </p>
                        </div>
                        <div className="template_minimal_experience">
                            <h1>Experience</h1>

                            { this.props.personData.positions.map((item, index) => {
                                return (
                                    <div className="template_classic_experience_position_container">
                                        <h3> { item.title } </h3>
                                        <h4><span id="experience_company_name">  { item.companyName } </span> / <span id="experience_start_date">{ item.startMonthYear }</span> - <span>{ item.endMonthYear }</span></h4>
                                        <p> { item.description } </p>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
export default ResumeClassic;
