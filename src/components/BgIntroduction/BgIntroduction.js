import './BgIntroduction.css';

function BgIntroduction() {
    return (
        <div className='panel bgIntroduction'>
            <h1>Education Background</h1>
            <div className='educations'>
                <div className='school'>
                    <img src={require('./neu.jpg')} alt="neu" />
                    <div className='details'>
                        <p className='schoolName'>Northeastern University, Seattle Campus</p>
                        <p>Master in <u><b>Computer Science</b></u></p>
                        <p><u>Related courses:</u> Object-Oriented Design, Computer System, Algorithm, 
                            Database Management System, Web Development, Foundation of Software Engineering</p>
                        <p>Jan 2021 - Aug 2023 (expected)</p>
                    </div>

                </div>
                <div className='school'>
                    <img src={require('./sysu.jpg')} alt="sysu" />
                    <div className='details'>
                        <p className='schoolName'>Sun Yat-sen University, Guangzhou, China</p>
                        <p>Master in Communications</p>
                        <p>Bachelor in Pharmacy</p>
                        <p>Sep 2011 - Dec 2017</p>
                    </div>
                </div>
            </div>



        </div> 
    )
}

export default BgIntroduction;