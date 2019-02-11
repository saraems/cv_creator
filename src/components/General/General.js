import React, { Component } from 'react';
import './General.scss';

class General extends Component {
    render() {
        return (
            <div className="general_data form_single_block">
                <p>General information</p>
                <div className='input_container'>
                    <label htmlFor="name">First Name</label>
                    <input onChange={ this.props.name } name="name" type="text" id="name"/>
                </div>
                <div className='input_container'>
                    <label htmlFor='surname'>Surname</label>
                    <input onChange={ this.props.surname } name="surname" type="text" id="surname"/>
                </div>
                <div className='input_container'>
                    <label htmlFor='current_position'>Current position / professional title</label>
                    <input onChange={ this.props.currentPosition } name="current_position" type="text" id="current_position"/>
                </div>
                <div className='input_container'>
                    <label htmlFor='phone'>Phone number</label>
                    <input onChange={ this.props.phoneNumber } name="phone" type="number"/>
                </div>
                <div className='input_container'>
                    <label htmlFor='email'>email</label>
                    <input onChange={ this.props.email } name="email" type="text"/>
                </div>
                <div className='input_container'>
                    <label htmlFor='summary'>Summary / yours presentation</label>
                    <textarea onChange={ this.props.summary } name="summary" id="summary"> </textarea>
                </div>
            </div>
        );
    }
}

export default General;
