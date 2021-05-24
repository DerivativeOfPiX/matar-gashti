import ReactPlayer from 'react-player'
import React, { useState } from 'react';

export default function CitySights(props) {

    const [proceed, setProceed] = useState(false)

    return (
        <div>
            <div className={proceed ? "invisible" : "visible"}>
                <div className="popup">
                    <button onClick={() => setProceed(true)} className="bg-danger text-light p-3 m-2">\x\</button>
                    <p className="text-center bg-light font-weight-bold p-4 rounded">The project is aimed at reimagining Karachi as a space of liminality. 
                    A city that goes beyond its title of being loud. As opposed to the chaotic persona and fast pace, 
                    we intend to capture the in-between moments. These are quintessential to breathing in Karachi. 
                    Moments like the view from a moving vehicle, the winds flirting against plants, the insects making their way on a branch,
                    the sea ripples, and the sun shining from behind the window bar. It is meant to bring a sense of hope. 
                    It is acting as a marker in between of the chaotic, turmoil that is Karachi.</p>
                </div>
            </div>
            <div className={proceed ? "" : "blur"}>
            <div className="my-3">
                <button className="btn btn-danger d-flex m-auto p-3" onClick={() => setProceed(false)}>Description</button>
            </div>
                <div className="player-wrapper">
                    <ReactPlayer width="100%" height="100%" className="m-auto video-player rounded" url="https://youtu.be/tgZ2auX1eG0" />
                </div>
            </div>
        </div>
    );
}