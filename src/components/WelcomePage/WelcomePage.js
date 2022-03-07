import { useEffect, useState } from 'react';
import './WelcomePage.css';

function WelcomePage() {
    const [text_1, setText1] = useState("");
    const [text_2, setText2] = useState("");
    const [styles, setStyle] = useState({});
    const [textSytle, setTextStle] = useState({});

    useEffect(() => {
        let newText_1 = "Hi, my name is Wen Liao";
        let newText_2 = "Welcome to my page";
        let idx_1 = 0;
        let idx_2 = 0;
        writeText();
        function writeText() {
            if (idx_1 <= newText_1.length) {
                setText1(newText_1.slice(0, idx_1));
                idx_1++;
            }
            else {
                setText2(newText_2.slice(0, idx_2));
                idx_2++;
            }
            if(idx_2 > newText_2.length) {
                setStyle(
                    {
                        backgroundColor: "#7e5050",
                        width: "200%",
                        height: "200%",
                        top: "-50%",
                        left: "-100%",
                        position: "absolute",
                        zIndex: "-1",
                        color: "white",
                        transition: "1s ease-in"
                    }
                );
                setTextStle(
                    {
                        color: "white",
                        transition: "1s ease-in"
                    }
                );
                return;
            }
            setTimeout(writeText, 50);
        }
    }, []);


    return (
        <div className='background panel welcome'>

            <div className='text'>
                <h1 className='welcomeText'>
                    <div className='textBox' style={styles}></div>
                    <div style={textSytle}>{text_1}</div>
                </h1>
                <h1 className='welcomeText'>{text_2}</h1>
            </div>
        </div>
    )
}

export default WelcomePage;