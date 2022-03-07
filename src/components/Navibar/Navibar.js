import { useState, useEffect } from 'react';
import { BsGithub, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import './Navibar.css';

function Navibar() {
    const [bg, setBg] = useState("#495057");
    const { innerHeight: height } = window;
    
    useEffect(() => {
        window.addEventListener('scroll', Navibar)
        return () => window.removeEventListener('scroll', Navibar)
    }, []);

    const Navibar = () => {
        if (window.scrollY > height + 200 && window.scrollY < 2 * height + 400) setBg("#495057");
        else if (window.scrollY >= 2 * height + 400 && window.scrollY < 3 * height + 600 ) setBg("#edf6f9");
        else if (window.scrollY >= 3 * height + 600 && window.scrollY < 4 * height + 800 ) setBg("#edf6f9");
        else if (window.scrollY >= 4 * height + 800 ) setBg("#495057");
        else setBg("#495057");
    }

    return (
        <div className='navibar' style={{color: bg}}>
            <div className='barContent'>
                {/* <div>
                    <h1 className='nameText-1'>Wen Liao</h1>
                    <h1 className='nameText-2'>Wen Liao</h1>
                </div> */}
                <h1 className='sign' style={{color: bg}}>Wen Liao's Website</h1>
                <div className='contact'>
                    <a style={{color: bg}} href="https://www.linkedin.com/in/wen-liao-b221887b/" rel="noreferrer" target="_blank"><BsLinkedin /></a>
                    <a style={{color: bg}} href="https://github.com/wenliaokim" rel="noreferrer" target="_blank"><BsGithub /></a>
                    <div className='iconText'><BsFillTelephoneFill /> 425-999-2001</div>
                    <div className='iconText'><AiFillMail />liao.w@northeastern.edu</div>
                </div>
            </div>
        </div>
    )
}

export default Navibar;
