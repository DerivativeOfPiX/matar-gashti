import ReactPlayer from 'react-player'
import next from '../images/next.png'
import previous from '../images/previous.png'
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function SoundScape() {

    const [v_index, setV_index] = useState(0)

    const playlist = [{title: "Exkishmish Medem – Budh Bazaar", url: 'http://localhost:8000/raw_sounds/budh_bazar.mp4',
    subtitle:"Walk with the intent of eavesdropping in here.\nA silent walk inside Budh bazaar near Aladin park.\nFrom hammering of bazaar tents to the bantering of salesmen.\nThis is a snippet of an every Wednesday soundness.\nThe crowded chitter-chatter of a Karachi's worth of antique scavenge."},
    {title: "Hazaron khauf k taaley - Abdullah Shah Ghazi mazaar", url: 'http://localhost:8000/raw_sounds/mazaar.mp4',
    subtitle: "Walk like it is an Ibadaat.\nThis sacred space of Karachi is of a known saint, Abdullah Shah Ghazi.\nIn the middle of a silent walk, the mazaar finds itself hosting piles and piles of threads and locks.\nAll attached to the fences.\nWhere do the locks and threads go once the wisher leaves?\nA worker of the Ghazi pays a visit and cuts down each thread.\nOne snip here, and one snip there.\nI wonder if the locks ever disappear."},
    {title: "Hum road k musafir hai – Saddar", url: 'http://localhost:8000/raw_sounds/musafir.mp4',
    subtitle: "Walk in hopes of crisscrossing paths with fellow walkers.\nHum road k musafir hai, Hum kabhi kabhar miltey hai.\nThe trucks speak their own tales on a busy day.\nThis silent walk was a chase after a ride, it was a walk with a purpose. But the wandering soul is ever so delighted with the traffic when the engines around aren't growling.\nOn some days, the travelers are preached by mystique mantras such as this one."},
    {title: "In the suburbs of Irfan loving Junaid - Safari Park", url: 'http://localhost:8000/raw_sounds/irfan_jun.mp4',
    subtitle: "Walk to wonder and wander.\nIrfan love Junaid 01/09/2009 You have to see this requited love from 2009.\nTo get to this one little hut, you have to walk along with the caged birds.\nYou have to pause and wonder what they are going through, wonder if they are yelling or singing or musing to their own requited love.\nWonder if these voices make sense to you.\nWonder if the watchers are enlightened by the birds or mirroring in fascination.\nAnd when you meet the end of these cages, pause at this little hut.\nYou must.\nYou must.\nYou must."},
    {title: "Stuck in this sinkhole - Gulshan Iqbal", url: 'http://localhost:8000/raw_sounds/sink_hole.mp4',
    subtitle: "Walk like you are finding your way out of a sinkhole.\nWhat good is a walk that doesn't have engines around it?\nA city of ruined sinks, alarms, and silencers.\nIt is not a city of people, but a city of cars today.\nThere is a bit of soil around the roads, and a small group of branches dangling from the corners.\nAnd here you are watching the vehicles living on."},
    {title: "Khushamdeed khatra - Musalman Cutchi Khatri", url: 'http://localhost:8000/raw_sounds/khatra.mp4',
    subtitle: "Walk as if welcoming danger.\nThere is loudness next to these chalkboards, and closed doors.\nThere are roaring mumbles and undecipherable whispers.\nKids are buzzing inside madrassa rooms, and teachers are interrupting once in a while.\nThere is a motor running, a car turning, silent zoning.\nThere is something brewing and you just can't put a finger on what it is.\nPat your heart. For it fears the demons haunting your walk."},
    {title: "Choo choo bolay sawari - Cantt Station", url: 'http://localhost:8000/raw_sounds/train.mp4',
    subtitle: "Walk like you have a few hours before hopping on to your train and leaving this city.\nPeak through the looking glass of a train, see the corridors whisp in wind.\nLonely wouldn't suffice today.\nThere are passengers everywhere. All waiting to hop aboard.\nAll planning to leave this place.\nListen to the announcements that make no sense.\nThe nonsense of laughter, and of alienated goodbyes."},
    {title: "I love you, Jaanam - Gulistan e Jauhar", url: 'http://localhost:8000/raw_sounds/love_you.mp4',
    subtitle: "Walk like you are in search of love.\nWalking on a street charmed by rickshaw music is a humming of its own\nJaanam, meri jaanam, swoons a hopeless romantic on its faithful walk to their Jaanam.\nThe low musing of the song, against the winds of a humid Karachi, can only be blossomed with graffiti on a certain wall.\nA declaration of love, from a jaan to another jaanam."}
    ]

    function Subtitle() {
        return (
            <div className="p-2 position-absolute sub-center rounded">
                <p className="text-center text-large text-white font-weight-italic">
                    {playlist[v_index].subtitle.split("\n").map((i, key) => {
                        return <p key={key}>{i}</p>;
                    })}
                </p>
            </div>
        )
    }

    // row justify-content-between align-content-center
    return (
        <div className="my-3 py-3 bg-black">
            <Dropdown className="text-center my-3">
                <Dropdown.Toggle>
                    {playlist[v_index].title}
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Dropdown.Item onClick={() => setV_index(0)}>Exkishmish Medem – Budh Bazaar</Dropdown.Item>
                    <Dropdown.Item onClick={() => setV_index(1)}>Hazaron khauf k taaley - Abdullah Shah Ghazi Mazaar</Dropdown.Item>
                    <Dropdown.Item onClick={() => setV_index(2)}>Hum road k musafir hai – Saddar</Dropdown.Item>
                    <Dropdown.Item onClick={() => setV_index(3)}>In the suburbs of Irfan loving Junaid - Safari Park</Dropdown.Item>
                    <Dropdown.Item onClick={() => setV_index(4)}>Stuck in this sinkhole - Gulshan Iqbal</Dropdown.Item>
                    <Dropdown.Item onClick={() => setV_index(5)}>Khushamdeed khatra - Musalman Cutchi Khatri</Dropdown.Item>
                    <Dropdown.Item onClick={() => setV_index(6)}>Choo choo bolay sawari - Cantt Station</Dropdown.Item>
                    <Dropdown.Item onClick={() => setV_index(7)}>I love you, Jaanam - Gulistan e Jauhar</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Subtitle></Subtitle>
            <ReactPlayer controls={true} width='95%' height='80%' className="m-auto video-player rounded" url={playlist[v_index].url} />
            <div onClick={() => 
                {
                    if(v_index - 1 === -1){setV_index(playlist.length - 1)}else{setV_index(v_index - 1)}}
                } className="prev rounded position-fixed bg-light">
                <img className="control-left" alt="previous video" src={previous} />
            </div>
            <div onClick={() => 
                {
                    if(v_index + 1 === playlist.length){setV_index(0)}else{setV_index(v_index + 1)}}
                } className="next rounded position-fixed bg-light">
                <img className="control-right" alt="next video" src={next} />
            </div>
        </div>
    )
}