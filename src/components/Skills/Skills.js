import {IoLogoPython, IoLogoHtml5, IoLogoCss3} from 'react-icons/io';
import {FaJava} from 'react-icons/fa';
import {SiC, SiJavascript, SiTypescript, SiNodedotjs, SiReact, SiBootstrap, SiGithub, SiPowershell, SiPostgresql, SiMysql, SiMongodb, SiHeroku} from 'react-icons/si';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import './Skills.css';



function Skills() {
    return (
        <div className='panel skills'>
            <h1 className='skillsTitle'>Skills</h1>

            <div className='skillSet'>
                <div className='languages'>
                    <div className='programLangs'>
                        <div className='langGroup'>
                            <h1><IoLogoPython /></h1>
                            <h3>Python</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><FaJava /></h1>
                            <h3>Java</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><SiC /></h1>
                            <h3>C/C++</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><SiJavascript /></h1>
                            <h3>JavaScript</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><SiTypescript /></h1>
                            <h3>TypeScript</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><IoLogoHtml5 /></h1>
                            <h3>Html</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><IoLogoCss3 /></h1>
                            <h3>CSS</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><AiOutlineConsoleSql /></h1>
                            <h3>SQL</h3>
                        </div>
                    </div>
                    <h2>languages</h2>
                </div>
                <div className='framework'>
                    <div className='fwSkills'>
                        <div className='langGroup'>
                            <h1><SiNodedotjs /></h1>
                            <h3>Node.js</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><SiReact /></h1>
                            <h3>React.js</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><SiBootstrap /></h1>
                            <h3>Bootstrap</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><SiGithub /></h1>
                            <h3>GitHub</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><SiPowershell /></h1>
                            <h3>Shell</h3>
                        </div>
                    </div>
                    <h2>Framework/Tools</h2>
                </div>
                <div className='database'>
                    <div className='dbSkills'>
                        <div className='langGroup'>
                            <h1><SiPostgresql /></h1>
                            <h3>PostgreSql</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><SiMysql /></h1>
                            <h3>MySql</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><SiMongodb /></h1>
                            <h3>MongoDB</h3>
                        </div>
                        <div className='langGroup'>
                            <h1><SiHeroku /></h1>
                            <h3>Heroku</h3>
                        </div>
                    </div>
                    <h2>Database/Cloud</h2>
                </div>
            </div>

        </div>
    )
}


export default Skills;