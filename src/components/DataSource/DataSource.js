import React, { Component } from 'react';
import './DataSource.scss';
import { Link } from 'react-router-dom';
import queryString from 'query-string';



class DataSource extends Component {


    constructor(props) {
        super(props);
        this.state = {
            token: ''
        }
    }

    componentDidMount() {


        this.intervalId = setTimeout(() => {
            let content = document.body.querySelector('.main_page_content_container');
            content.classList.add('fade-appear-active')

        }, 20);


        let code = window.location.href;
        code = code.replace('&state=987654321#/', '');
        code = code.replace('https://saraems.github.io/cv_creator/#/resume/?code=', '');


        console.log(code);


        var auth = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Host': 'www.linkedin.com'
            },
            body: queryString.stringify({
                'grant_type':'authorization_code',
                'code': code,
                'redirect_uri': 'https://saraems.github.io/cv_creator/resume/',
                'client_id': '77k3xcm0gm759e',
                'client_secret': 'rF7EW3ZgFJU48iGZ'
            })
        };

        var acces =  {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'https://saraems.github.io/cv_creator/resume/',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization': 'Bearer' + this.state.token,
            }};


        fetch(`https://www.linkedin.com/oauth/v2/accessToken`, auth)
            .then(res => res.json())
            .then(data => data.access_token)
            .then(token => this.setState({token: token}))
            .then(() =>
                fetch(`https://api.linkedin.com/v2/me?format=json`, acces)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(err => console.log(err))
                )


    }





    responseLinkedin = response => {
        window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77k3xcm0gm759e&redirect_uri=https%3A%2F%2Fsaraems.github.io%2Fresume%2F&state=987654321&scope=r_basicprofile'
    };

    demoData = () => {
        const personData = {
            id: 1,
            firstName: 'Alexander',
            lastName: 'Dubois',
            headline: 'Software Engineer',
            email: 'alex.jaruga@republika.ru',
            phoneNumber: '782 897 980',
            summary: 'I am a Java Developer. I specialise in programming e-commerce systems based on SAP Hybris. I have successfuly passed the SAP Hybris Commerce 6.2 Developer certification exam. I also have experience in working with legacy code. To deliver the best solution within the set time frame is what I strive for in my work.',
            positions: [ {id: 1, companyName: 'EPAM Systems', description: 'Currently I am participating in an e-commerce project based on SAP Hybris. My main responsibilities is to work with legacy code, extend existing features, create new features, fix bugs, write unit tests. Main skill used here is Java and related technologies. ', endMonthYear: 'Present', location: 'Kraków', startMonthYear: 'September 2017', title: 'SoftwereEngenieer'}, {id: 2, companyName: 'Eclipse Group Solutions Ltd.', description: 'I have participated in 3 e-commerce projects using agile methodologies based on SAP Hybris. I was working closely with business analysts and software testers. My main responsibilities were beyond development and testing to participate in the process of analysing business requirements as a developer. ', endMonthYear: 'August 2017', location: 'Wrocław', startMonthYear: 'Febuary 2016', title: 'Junior Analyst / Developer'},
                {id: 3, companyName: 'Grupa Unity', description: 'I was helping with the development of a online shop e-commerce system. Main skill used here is Java and related technologies', endMonthYear: 'January 2016', location: 'Wrocław', startMonthYear: 'April 2015', title: 'Junior Java Developer'}],
            profilePicture: 'url',
            vanityName: 'alexander-dubois',
            languages: [{ id: '1', language: 'Polish', proficiency: 'native-or-bilingual'}, {id: '2', language: 'German', proficiency: 'full-professional'}, {id: '3', language: 'Russian', proficiency: 'basic'}],
            skills: [{id: 1, skill: 'Java'},{id: 2, skill: 'Hybris'},{id: 3, skill: 'Spring'}, {id: 4, skill: 'Hibernate'}, {id: 5, skill: 'NoSQL'}, {id: 6, skill: 'Java Enterprise Edition'}, {id: 7, skill: 'Clean Code'}, {id: 8, skill: 'Maven'}, {id: 9, skill: 'Scala'}, {id: 10, skill: 'Python'}, {id:11, skill: 'Spock Freamework'}, {id: 12, skill: 'JUnit'} ],
            certifications: [{ id: 1, name: 'Java', number: '8734298'}],
            educations: [{id: 1, schoolName: 'AGH University of Science and Technology', fieldOfStudy: 'Mechatronics, Robotics and Automation Engineering', startDate: 2011, endDate: 2015, degree: "Engineer's degree", activities: '', notes: ''}, {id: 2, schoolName: 'AGH University of Science and Technology', fieldOfStudy: 'Mechatronics, Robotics and Automation Engineering', startDate: 2015, endDate: 2017, degree: 'Master', activities: '', notes: ''}],
            courses: [{id: 1, name: '',  authority: '', number: '', startDate: '', endDate: ''}],
            volunteer: [{volunteerExperiences: '', id: 1, organization: 1, role: ''}]
        };

        localStorage.setItem('personData', JSON.stringify(personData));
    };

    render() {
        return (
            <div className="main_page_container">
                <div className="main_page_content_container fade-enter">
                    <header>
                        <h1> Insert information</h1>
                        <p>
                            prepare information about your career path by yourself or use your LinkedIn account
                        </p>
                    </header>

                    <section className="btns_container">

                        <Link to='/form'><button className="selection_btn btn_use_form" id="use_your_own_data">Prepare your data</button></Link>

                        <button className="selection_btn btn_use_LiIn" id="use_linkedIn_data" onClick={this.responseLinkedin}> <i className="fab fa-linkedin linkedin"> </i> Use your LinkedIn's data</button>

                    </section>

                    <section className="btn_container">

                        <Link to='/resume'><button onClick={ this.demoData } className="selection_btn btn_use_LiIn" id="use_your_own_data">Use demo data</button></Link>

                    </section>
                </div>
            </div>
        )
    }
}

export default DataSource;
