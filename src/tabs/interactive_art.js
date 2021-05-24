import red from '../images/red.png';
import green from '../images/green.png';
import blue from '../images/blue.png'
import React, {useState} from 'react'


function InteractiveArt(){

    const [color, setColor] = useState("red")

    function moveTorch(e, cur_color){
        let layer1, layer2, torch, pos, layer_r, layer_g, layer_b;

        layer_b = document.getElementsByClassName("int-blue")[0];
        layer_r = document.getElementsByClassName("int-red")[0];
        layer_g = document.getElementsByClassName("int-green")[0];

        //clear any clippaths ideally should be onStateChange
        layer_r.style.clipPath = 'none';
        layer_g.style.clipPath = 'none';
        layer_b.style.clipPath = 'none';
    
        
        torch = document.getElementsByClassName("torch")[0];
        //console.log(torch)
        torch.style.left = (e.pageX).toString() + 'px';
        torch.style.top =  (e.pageY).toString() + 'px';
        torch.style.backgroundColor = color;
        
        switch(cur_color){
            case "green":
                layer1 = layer_b;
                layer2 = layer_r;
                layer_g.style.visiblity= 'hidden';
                break;
            case "blue":
                layer1 = layer_g;
                layer2 = layer_r;
                layer_b.style.visiblity= 'hidden';
                break;
            case "red":
                layer1 = layer_g;
                layer2 = layer_b;
                layer_r.style.visiblity= 'hidden';
                break;
            default:
                console.log("NO COLOR WAS SPECIFIED")
        }
        pos = torch.getBoundingClientRect()
        layer1.style.clipPath = `circle(100px at ${torch.offsetLeft - 320}px ${torch.offsetTop - 110}px)`;
        layer2.style.clipPath = `circle(100px at ${torch.offsetLeft - 320}px ${torch.offsetTop - 110}px)`;
    }

    return(
        <div>
            <div className="torch position-absolute"></div>
            <div className="d-flex flex-row my-2 justify-content-center">
                    <button className="btn btn-danger" onClick={() => setColor("red")}>Red</button>
                    <button className="btn btn-success" onClick={() => setColor("green")}>Green</button>
                    <button className="btn btn-primary" onClick={() => setColor("blue")}>Blue</button>
            </div>
            <p className="w-25 rounded m-auto text-center text-white bg-black p-3 font-weight-italic">light : {color}</p>
            <div className="spacer"/>
            <div onMouseMove={(e) => {moveTorch(e, color)}} className="art-container w-100 m-auto border border-dark position-relative bg-white">
                <img src={red} alt="red layer" className="int-red w-100 h-auto m-auto position-absolute text-center"></img>
                <img src={green} alt="green layer" className="int-green w-100 h-auto m-auto position-absolute text-center"></img>
                <img src={blue} alt="blue layer" className="int-blue w-100 h-auto m-auto position-absolute text-center"></img>
            </div>
        </div>
    )
}

export default InteractiveArt