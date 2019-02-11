import React, { Component } from 'react';
import './Positions.scss';
import Position from "./Position";



class Positions extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            positions: [1],
        })
    }

    addExperience = () => {

        this.setState({
            positions: [...this.state.positions, 1],
        });

    };


    render() {
        return (
            <div className="positions form_single_block">

                <p>Work experience</p>
                { this.state.positions.map((item, index) => <Position id={index+1} companyName={ this.props.companyName } startMonthYear={ this.props.startMonthYear } title={ this.props.title } positionLocation={ this.props.positionLocation } endMonthYear={ this.props.endMonthYear } positionDescription={ this.props.positionDescription }/>) }
                <button onClick={ () => {this.addExperience(); this.props.createPositionObj()} } className='add_resume_info' id="add_new_position_field"> Add next work experience </button>

            </div>
        );
    }
}

export default Positions;
