import React, { Component } from 'react';


class Position extends Component {
    render() {
        return (
            <div className="position" id={`position_${this.props.id}`}>
                <div className="input_container">
                    <label htmlFor="company_name"> Company name</label>
                    <input onChange={ this.props.companyName } name="company_name" type="text" id={`company_name_${this.props.id}`}/>
                </div>
                <div className="input_container">
                    <label htmlFor="startMonthYear">Beginning date</label>
                    <input onChange={ this.props.startMonthYear } name="startMonthYear" type="text" id={`startMonthYear_${this.props.id}`} placeholder="Month and year"/>
                </div>
                <div className="input_container">
                    <label htmlFor="title">Your position at the company</label>
                    <input onChange={ this.props.title } name="title" type="text" id={`title_${this.props.id}`} />
                </div>
                <div className="input_container">
                    <label htmlFor="position_location">Company location</label>
                    <input onChange={ this.props.positionLocation } name="position_location" type="text" id={`position_location_${this.props.id}`}/>
                </div>
                <div className="input_container">
                    <label htmlFor="endMonthYear">Finishing date</label>
                    <input onChange={ this.props.endMonthYear } name="endMonthYear" type="text" id={`endMonthYear_${this.props.id}`} placeholder="Month and year"/>
                </div>
                <div className="input_container">
                    <label htmlFor="position_description">Description of your duties and success</label>
                    <textarea onChange={ this.props.positionDescription } name="position_description" id={`position_description_${this.props.id}`}> </textarea>
                </div>
            </div>
        );
    }
}


export default Position;
