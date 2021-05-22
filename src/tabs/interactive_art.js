import red from '../images/red.png';
import green from '../images/green.png';
import blue from '../images/blue.png'
import React, {useState} from 'react'


function InteractiveArt(){

    const [color, setColor] = useState("red")

    function moveTorch(e, cur_color){
        let layer1, layer2, torch;
        //clear any clippaths
        torch = document.getElementsByClassName("torch")[0];
        //console.log(torch)
        torch.style.left = (e.pageX).toString() + 'px';
        torch.style.top =  (e.pageY).toString() + 'px';
        torch.style.backgroundColor = color;
        
        switch(cur_color){
            case "green":
                layer1 = document.getElementsByClassName("int-blue")[0];
                layer2 = document.getElementsByClassName("int-red")[0];
                document.getElementsByClassName("int-red")[0].style.visiblity= 'visible';
                break;
            case "blue":
                layer1 = document.getElementsByClassName("int-green")[0];
                layer2 = document.getElementsByClassName("int-red")[0];
                document.getElementsByClassName("int-red")[0].style.visiblity= 'visible';
                break;
            case "red":
                layer1 = document.getElementsByClassName("int-green")[0];
                layer2 = document.getElementsByClassName("int-blue")[0];
                document.getElementsByClassName("int-red")[0].style.visiblity= 'hidden';
                break;
            default:
                console.log("NO COLOR WAS SPECIFIED")
        }
        
        layer1.style.clipPath = `circle(100px at ${e.pageX - 320}px ${e.pageY - 85}px)`;
        layer2.style.clipPath = `circle(100px at ${e.pageX - 320}px ${e.pageY - 85}px)`;
    }

    return(
        <div>
            <div className="torch position-absolute"></div>
            <div className="navbar navbar-light">
                <ul>
                    <button onClick={() => setColor("red")}>Red</button>
                    <button onClick={() => setColor("green")}>Green</button>
                    <button onClick={() => setColor("blue")}>Blue</button>
                    <p>Current color is {color}</p>
                </ul>
            </div>
            <div onMouseMove={(e) => {moveTorch(e, color)}} className="art-container m-auto border border-dark position-relative bg-white">
                <img src={red} alt="red layer" className="int-red mw-100 mh-100 mx-auto position-absolute text-center"></img>
                <img src={green} alt="green layer" className="int-green mw-100 mh-100 mx-auto position-absolute text-center"></img>
                <img src={blue} alt="blue layer" className="int-blue mw-100 mh-100 mx-auto position-absolute text-center"></img>
            </div>
        </div>
    )
}

export default InteractiveArt