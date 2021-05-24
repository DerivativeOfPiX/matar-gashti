import red from '../images/red.png';
import green from '../images/green.png';
import blue from '../images/blue.png'
import React, {useState} from 'react'


function InteractiveArt(){

    const [color, setColor] = useState("red")

    function moveTorch(e, cur_color){
        let layer1, layer2, torch, layer_r, layer_g, layer_b;

        layer_b = document.getElementsByClassName("int-blue")[0];
        layer_r = document.getElementsByClassName("int-red")[0];
        layer_g = document.getElementsByClassName("int-green")[0];

        //clear any clippaths ideally should be onStateChange
        layer_r.style.clipPath = 'none';
        layer_g.style.clipPath = 'none';
        layer_b.style.clipPath = 'none';
    
        switch(cur_color){
            case "green":
                layer1 = layer_b;
                layer2 = layer_r;
                break;
            case "blue":
                layer1 = layer_g;
                layer2 = layer_r;
                break;
            case "red":
                layer1 = layer_g;
                layer2 = layer_b;
                break;
            default:
                console.log("NO COLOR WAS SPECIFIED")
        }
        
        //torch = document.getElementsByClassName("torch")[0];
        //console.log(torch)
        //torch.style.left = (e.pageX).toString() + 'px';
        //torch.style.top =  (e.pageY).toString() + 'px';
        //torch.style.backgroundColor = color;
        
        //pos = torch.getBoundingClientRect()
        layer1.style.clipPath = `circle(100px at ${e.pageX - 200}px ${e.pageY - 100}px)`;
        layer2.style.clipPath = `circle(100px at ${e.pageX - 200}px ${e.pageY - 100}px)`;
    }

    return(
        <div>
            <div className="bg-black w-50 m-auto my-4 p-3 rounded">
                <p className ="text-white text-center">
                    This is an interactive art. It has meshed the three types of things I have observed on the streets of Karachi. From declaration of love, to explicit crafts, to religious innuendo. 
                    Use the red, blue, and green colors to read the finds, the words, and the scribbles. Take your time while you move your cursor around.
                </p>
            </div>
            {/* <div className="torch position-absolute"></div> */}
            <div className="d-flex flex-row my-2 justify-content-center">
                    <button className="btn btn-danger" onClick={() => setColor("red")}>Red</button>
                    <button className="btn btn-success" onClick={() => setColor("green")}>Green</button>
                    <button className="btn btn-primary" onClick={() => setColor("blue")}>Blue</button>
            </div>
            <p className="w-25 rounded m-auto text-center text-white bg-black p-3 font-weight-italic">light : {color}</p>
            <div className="spacer"/>
            <div onMouseMove={(e) => {moveTorch(e, color)}} className="border border-dark art-container w-75 h-100 m-auto position-relative bg-white">
                <div className={color === "red" ? "invisible" : ""}><img src={red} alt="red layer" className="int-red w-100 h-auto m-auto position-absolute text-center"></img></div>
                <div className={color === "green" ? "invisible" : ""}><img src={green} alt="green layer" className="int-green w-100 h-auto m-auto position-absolute text-center"></img></div>
                <div className={color === "blue" ? "invisible" : ""}><img src={blue} alt="blue layer" className="int-blue w-100 h-auto m-auto position-absolute text-center"></img></div>
            </div>
            <div className="spacer"/>
        </div>
    )
}

export default InteractiveArt