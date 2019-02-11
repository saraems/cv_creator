import React, { Component } from 'react';
import './ResumeMinimal.scss';



class ResumeMinimalistic extends Component {
    render() {

        console.log(this.props.personData);

        return (
            <div className="template_minimal" id="myMm">
                <header>
                    <div className="template_minimal_user_name">
                        { this.props.personData.firstName } { this.props.personData.lastName }
                    </div>
                    <div className="template_minimal_user_position">
                        { this.props.personData.headline }
                    </div>
                    <div className="decoration_line"> </div>
                </header>
                <main className='main_page'>
                    <div className="template_minimal_left_panel_container">
                        <div className="template_minimal_education">

                            <h1>Education</h1>

                            { this.props.personData.educations.map((item, index) => {
                                return (
                                    <div key={index} className="template_minimal_education_container">
                                        <h3> { item.schoolName } </h3>
                                        <p className="left_panel"> { item.degree } in { item.fieldOfStudy } </p>
                                        <h4> { item.startDate } - { item.endDate }</h4><br/>
                                    </div>
                                )
                            }) }

                        </div>

                        <div className="template_minimal_expertise">

                            <h1>Expertise</h1>

                            <div className="template_minimal_expertise_container">
                                <h3>Skills</h3>
                                <ul>
                                    { this.props.personData.skills.map((item, index) => <li key={index}> { item.skill } / </li> ) }
                                </ul>
                            </div>

                            <div className="template_minimal_expertise_container">
                                <h3>Languages</h3>
                                <ul>
                                    { this.props.personData.languages.map((item, index) => <li key={index}>{ item.language }: { item.proficiency }</li>) }
                                </ul>
                            </div>
                        </div>

                        <div className="template_minimal_contact">
                            <h1>Contact</h1>
                            <p className="left_panel">{ this.props.personData.phoneNumber }</p>
                            <h4>{ this.props.personData.email }</h4>
                        </div>

                    </div>



                    <div className="template_minimal_right_panel_container">
                        <div className="template_minimal_profile">
                            <h1>Profile</h1>
                            <p> { this.props.personData.summary } </p>
                        </div>
                        <div className="template_minimal_experience">
                            <h1>Experience</h1>

                            { this.props.personData.positions.map((item, index) => {
                                return (
                                    <div className="template_minimal_experience_position_container">
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
export default ResumeMinimalistic;
