import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ResumeForm.scss';
import Educations from "../Educations/Educations";
import Skills from "../Skills/Skills";
import Languages from "../Languages/Languages";
import Positions from "../Positions/Positions";
import General from "../General/General";


class ResumeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            position: '',
            summary: '',
            phoneNumber: '',
            email: '',
            positions: [],
            companyName: '',
            startMonthYear: '',
            title: '',
            location: '',
            endMonthYear: '',
            description: '',
            educations: [],
            schoolName: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
            degree: '',
            skills: '',
            languages: [],
            language: '',
            proficiency: '',

        }
    }

    // FADE IN

    componentDidMount() {
        this.intervalId = setTimeout(() => {
            let content = document.body.querySelector('.main_page_content_container');
            content.classList.add('fade-appear-active')

        }, 20);
    }


    // GENERAL

    name = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    surname = (e) => {
        this.setState({
            surname: e.target.value
        });
    };

    currentPosition = (e) => {
        this.setState({
            position: e.target.value
        });
    };

    summary = (e) => {
        this.setState({
            summary: e.target.value
        });
    };

    phoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        });
    };

    email = (e) => {
        this.setState({
            email: e.target.value
        });
    };




    // POSITIONS


    companyName = (e) => {
        this.setState({
            companyName: e.target.value
        });
    };

    startMonthYear = (e) => {
        this.setState({
            startMonthYear: e.target.value
        });
    };

    title = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    positionLocation = (e) => {
        this.setState({
            location: e.target.value
        });
    };

    endMonthYear = (e) => {
        this.setState({
            endMonthYear: e.target.value
        });
    };

    positionDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    };

    createPositionObj = () => {

        let position = {
            companyName: this.state.companyName,
            startMonthYear: this.state.startMonthYear,
            title: this.state.title,
            location: this.state.location,
            endMonthYear: this.state.endMonthYear,
            description: this.state.description
        };


        if (this.state.languages === []) {
            this.setState({
                positions: [position],
            });
        } else {
            this.setState({
                positions: [...this.state.positions, position],
            });
        }
    };



    //SKILLS


    skills = (e) => {
        this.setState({
            skills: e.target.value
        });
        console.log(e.target.value);
    };



    //EDUCATIONS


    schoolName = (e) => {
        this.setState({
            schoolName: e.target.value
        })
    };

    fieldOfStudy = (e) => {
        this.setState({
            fieldOfStudy: e.target.value
        })
    };

    startDate = (e) => {
        this.setState({
            startDate: e.target.value
        })
    };

    endDate = (e) => {
        this.setState({
            endDate: e.target.value
        })
    };

    degree = (e) => {
        this.setState({
            degree: e.target.value
        });
    };

    createEducationObj = () => {
        let education = {
            schoolName: this.state.schoolName,
            fieldOfStudy: this.state.fieldOfStudy,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            degree: this.state.degree,
        };

        if (this.state.languages === []) {
            this.setState({
                educations: [education],
            });
        } else {
            this.setState({
                educations: [...this.state.educations, education],
            });
        }
    };

    //LANGUAGES

    language = (e) => {
        this.setState({
            language: e.target.value
        });
    };

    proficiency = (e) => {
        this.setState({
            proficiency: e.target.value
        });
    };

    createLanguageObj = () => {

        let language = {
            language: this.state.language,
            proficiency: this.state.proficiency,
        };

        if (this.state.languages === []) {
            this.setState({
                languages: [language],
            });
        } else {
            this.setState({
                languages: [...this.state.languages, language],
            });
        }
    };



    // SUBMIT

    submit = () => {


        let skillsArray = this.state.skills.split(', ');
        let skillsObjectsArray = [];

        for (let i = 0; i < skillsArray.length; i++) {
            skillsObjectsArray.push({skill: skillsArray[i]})
        }

        this.createEducationObj();

        let languages = [...this.state.languages, {language: this.state.language, proficiency: this.state.proficiency}];
        let educations = [...this.state.educations, {schoolName: this.state.schoolName, fieldOfStudy: this.state.fieldOfStudy, startDate: this.state.startDate, endDate: this.state.endDate, degree: this.state.degree} ];
        let positions = [...this.state.positions, {companyName: this.state.companyName, startMonthYear: this.state.startMonthYear, title: this.state.title, location: this.state.location, endMonthYear: this.state.endMonthYear, description: this.state.description}];

         const userResumeData = {
            firstName: this.state.name,
            lastName: this.state.surname,
            headline: this.state.position,
            summary: this.state.summary,
            skills:  skillsObjectsArray,
            educations: educations,
            positions:  positions,
            languages: languages,
        };

         localStorage.setItem('personData', JSON.stringify(userResumeData));
        console.log(userResumeData);
    };

    render() {


        return (
            <div className="form_page_container">
                <div className="main_page_content_container fade-enter">

                    <div className="form_header"><p>Prepare information for your resume</p></div>
                    <main className="form_container">
                        <div className='form'>
                           <General name={ this.name } surname = { this.surname } currentPosition = { this.currentPosition } summary={ this.summary } phoneNumber={ this.phoneNumber } email={ this.email }/>
                            <Positions companyName={ this.companyName } startMonthYear={ this.startMonthYear } title={ this.title } positionLocation={ this.positionLocation } endMonthYear={ this.endMonthYear } positionDescription={ this.positionDescription } createPositionObj={ this.createPositionObj }/>
                            <Languages proficiency={ this.proficiency } language={ this.language } createLanguageObj={ this.createLanguageObj }/>
                            <Skills skills={ this.skills } />
                            <Educations schoolName={ this.schoolName } fieldOfStudy={ this.fieldOfStudy } startDate={ this.startDate }  endDate={ this.endDate } degree={ this.degree } createEducationObj={ this.createEducationObj }/>
                        </div>
                        <Link to='/resume'>
                            <button onClick={ this.submit } type="submit" className='create_resume_btn'> Create your Resume </button>
                        </Link>
                    </main>

                </div>
            </div>
        );
    }
}

export default ResumeForm;





