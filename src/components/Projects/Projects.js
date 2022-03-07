import { useState, useEffect } from 'react';
import { GoPrimitiveDot, GoLinkExternal } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import { projectArray } from './projectArray';
import './Projects.css';


function Projects() {
    const [title, setTitle] = useState(projectArray[0].title);
    const [duration, setDuration] = useState(projectArray[0].duration);
    const [image, setImage] = useState(projectArray[0].image);
    const [link, setLink] = useState(projectArray[0].link);
    const [details, setDetails] = useState(projectArray[0].details);
    const [idx, setIdx] = useState(0);
    const [bgColor, setBgColor] = useState(projectArray[0].background);
    
    let detailsDisplay = [];
    for (let i = 0; i < details.length; i++) {
        let detailDiv = <div>{details[i]}</div>
        detailsDisplay.push(detailDiv);
    }

    useEffect(() => {
        for (let i = 0; i < details.length; i++) {
            let detailDiv = <div>{details[i]}</div>
            detailsDisplay.push(detailDiv);
        }
    }, [details])

    useEffect(() => {
        setTitle(projectArray[idx].title);
        setDuration(projectArray[idx].duration);
        setImage(projectArray[idx].image);
        setLink(projectArray[idx].link);
        setDetails(projectArray[idx].details);
        setBgColor(projectArray[idx].background);
    }, [idx])

    const toNextPro = () => {
        if (idx == projectArray.length - 1) {
            setIdx(0);
        } else {
            setIdx(idx + 1);
        }
    }

    const toPrevPro = () => {
        if (idx == 0) {
            setIdx(projectArray.length - 1);
        } else {
            setIdx(idx - 1);
        }
    }

    return (
        <div className='panel projects'>
            <h1 className='boardTitle'>Projects</h1>
            <div className='board'>
                <button onClick={() => toPrevPro()} className='leftButton'><ImArrowLeft /></button>
                <div className='displayBg' style={{backgroundColor: `${bgColor}`}}>
                    <div className='projectContent'>
                        <img src={require(`${image}`)} alt="" />
                        <div className='projectText'>
                            <h1>{title}</h1>
                            <div><GoLinkExternal /> Link: <a href={link} rel="noreferrer" target="_blank">{link}</a></div>
                            <div><BiTime /> {duration}</div>
                            <div className='projectDetails'>{detailsDisplay}</div>
                        </div>
                    </div>
                </div>
                <button onClick={() => toNextPro()} className='rightButton'><ImArrowRight /></button>
            </div>
            </div>

    )
}

export default Projects;
