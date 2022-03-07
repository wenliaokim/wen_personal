import {BsBuilding, BsFillBriefcaseFill, BsFillCalendarDayFill, BsFillPersonBadgeFill} from 'react-icons/bs';
import './Experience.css';

function Experience() {

    let company = "Circle";
    let link = "https://www.circle.com/en/";
    let title = "Incoming Software Engineer Intern (backend)";
    let duration = "05/2022 - 08/2022 (expected)";
    let responsibility = "To be determined";

    return (
        <div className='panel experience'>
            <h1>Experience</h1>
            <div className='jobs'>
                <div>
                    <div className='job'>
                        <h2><BsBuilding /> <a href={link} rel="noreferrer" target="_blank">{company}</a></h2>
                        <div><BsFillBriefcaseFill /> {title}</div>
                        <div><BsFillCalendarDayFill /> {duration}</div>
                        <div><BsFillPersonBadgeFill /> Responsibility: {responsibility}</div>

                    </div>
                    <div className='job'>
                        <h2>More in the future</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience;