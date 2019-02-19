import React, { Component } from 'react';
import './Resume.scss';
import ResumeMinimalistic from '../ResumeMinimal/ResumeMinimal'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ResumeClassic from '../ResumeClassic/ResumeClassic'
import ResumeSides from "../ResumeSides/ResumeSides";


class Resume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personData: JSON.parse(localStorage.getItem("personData"))
        }
    }


    pxToMm = (px) => {
        return Math.floor(px/document.getElementById('myMm').offsetHeight);
    };

    mmToPx = (mm) => {
        return document.getElementById('myMm').offsetHeight*mm;
    };

    range = (start, end) => {
        return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
    };

    print = () => {

        const input = document.getElementById('myMm');
        const inputHeightMm = this.pxToMm(input.offsetHeight);
        const a4WidthMm = 210;
        const a4HeightMm = 297;
        const a4HeightPx = this.mmToPx(a4HeightMm);
        const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm/a4HeightMm) + 1;

        console.log({
            input, inputHeightMm, a4HeightMm, a4HeightPx, numPages, range: this.range(0, numPages),
            comp: inputHeightMm <= a4HeightMm, inputHeightPx: input.offsetHeight
        });

        html2canvas(input)
            .then((canvas) => {
                // document.body.appendChild(canvas);
                const imgData = canvas.toDataURL('image/png');

                const pdf = new jsPDF();

                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save(`myMm.pdf`);
            });
        };

    render() {

        if (localStorage.template === "class") {
            return (
                <div className="cv_page">
                    <section className="cv_container" id="capture" >
                        <ResumeClassic personData = {this.state.personData}/>
                    </section>
                    <button id={"singlePage"} className="selection_btn print_cv_btn" onClick={ this.print }>Download</button>
                </div>
            )
        } else if (localStorage.template === "min") {
            return (
                <div className="cv_page">
                    <section className="cv_container" id="capture" >
                        <ResumeMinimalistic personData = {this.state.personData}/>
                     </section>
                    <button id={"singlePage"} className="selection_btn print_cv_btn" onClick={ this.print }>Download</button>
                </div>
            )
        } else if (localStorage.template === "sides") {
            return (
                <div className="cv_page">
                    <section className="cv_container" id="capture" >
                        <ResumeSides personData = {this.state.personData}/>
                    </section>
                    <button id={"singlePage"} className="selection_btn print_cv_btn" onClick={ this.print }>Download</button>
                </div>
            )
        }
    }
}

export default Resume;
