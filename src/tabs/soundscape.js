import ReactPlayer from 'react-player'
import next from '../images/next.png'
import previous from '../images/previous.png'
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function SoundScape() {

    const [v_index, setV_index] = useState(0)
    const [proceed, setProceed] = useState(false)

    const playlist = [{
        title: "Exkishmish Medem – Budh Bazaar", url: 'https://youtu.be/AFSXIb8FGjw',
        subtitle: "Walk with the intent of eavesdropping in here.\nA silent walk inside Budh bazaar near Aladin park.\nFrom hammering of bazaar tents to the bantering of salesmen.\nThis is a snippet of an every Wednesday soundness.\nThe crowded chitter-chatter of a Karachi's worth of antique scavenge."
    },
    {
        title: "Hum road k musafir hai – Saddar", url: 'https://youtu.be/EQGvDlUdQSc',
        subtitle: "Walk in hopes of crisscrossing paths with fellow walkers.\nHum road k musafir hai, Hum kabhi kabhar miltey hai.\nThe trucks speak their own tales on a busy day.\nThis silent walk was a chase after a ride, it was a walk with a purpose. But the wandering soul is ever so delighted with the traffic when the engines around aren't growling.\nOn some days, the travelers are preached by mystique mantras such as this one."
    },
    {
        title: "Stuck in this sinkhole - Gulshan Iqbal", url: 'https://youtu.be/JASSUOvRQ9s',
        subtitle: "Walk like you are finding your way out of a sinkhole.\nWhat good is a walk that doesn't have engines around it?\nA city of ruined sinks, alarms, and silencers.\nIt is not a city of people, but a city of cars today.\nThere is a bit of soil around the roads, and a small group of branches dangling from the corners.\nAnd here you are watching the vehicles living on."
    },
    {
        title: "Khushamdeed khatra - Musalman Cutchi Khatri", url: 'https://youtu.be/ivx17szkWDU',
        subtitle: "Walk as if welcoming danger.\nThere is loudness next to these chalkboards, and closed doors.\nThere are roaring mumbles and undecipherable whispers.\nKids are buzzing inside madrassa rooms, and teachers are interrupting once in a while.\nThere is a motor running, a car turning, silent zoning.\nThere is something brewing and you just can't put a finger on what it is.\nPat your heart. For it fears the demons haunting your walk."
    },
    {
        title: "In the suburbs of Irfan loving Junaid - Safari Park", url: 'https://youtu.be/qrnpge_oa10',
        subtitle: "Walk to wonder and wander.\nIrfan love Junaid 01/09/2009 You have to see this requited love from 2009.\nTo get to this one little hut, you have to walk along with the caged birds.\nYou have to pause and wonder what they are going through, wonder if they are yelling or singing or musing to their own requited love.\nWonder if these voices make sense to you.\nWonder if the watchers are enlightened by the birds or mirroring in fascination.\nAnd when you meet the end of these cages, pause at this little hut.\nYou must.\nYou must.\nYou must."
    },
    {
        title: "Hazaron khauf k taaley - Abdullah Shah Ghazi mazaar", url: 'https://youtu.be/60THFLQ1H1I',
        subtitle: "Walk like it is an Ibadaat.\nThis sacred space of Karachi is of a known saint, Abdullah Shah Ghazi.\nIn the middle of a silent walk, the mazaar finds itself hosting piles and piles of threads and locks.\nAll attached to the fences.\nWhere do the locks and threads go once the wisher leaves?\nA worker of the Ghazi pays a visit and cuts down each thread.\nOne snip here, and one snip there.\nI wonder if the locks ever disappear."
    },
    {
        title: "I love you, Jaanam - Gulistan e Jauhar", url: 'https://youtu.be/1-vWBEATGJM',
        subtitle: "Walk like you are in search of love.\nWalking on a street charmed by rickshaw music is a humming of its own\nJaanam, meri jaanam, swoons a hopeless romantic on its faithful walk to their Jaanam.\nThe low musing of the song, against the winds of a humid Karachi, can only be blossomed with graffiti on a certain wall.\nA declaration of love, from a jaan to another jaanam."
    },
    {
        title: "Choo choo bolay sawari - Cantt Station", url: 'https://youtu.be/va2bLLQ5ndU',
        subtitle: "Walk like you have a few hours before hopping on to your train and leaving this city.\nPeak through the looking glass of a train, see the corridors whisp in wind.\nLonely wouldn't suffice today.\nThere are passengers everywhere. All waiting to hop aboard.\nAll planning to leave this place.\nListen to the announcements that make no sense.\nThe nonsense of laughter, and of alienated goodbyes."
    },
    {
        title: "Karachi - The City of Walks", url: 'https://youtu.be/aSLTD68ZB20',
        subtitle: "Karachi is a universe- we all know for sure. It is hustling and bustling as they all name it to be.\nAll of us walking our way from this street to the other,from this shop to a car, or from this place to our house.\nThese walks alone are microscopic tales but when I put them all in one place, and jumble them up to create havoc.\nInstead, I get a Karachi that is a haunting void- of life and sobriety."
    }
    ]

    function Subtitle() {
        return (
            <div className="p-2 text-align-center w-25 rounded position-fixed int-blue bg-black m-auto">
                <div className="p-3 bg-secondary">
                    {playlist[v_index].subtitle.split("\n").map((i, key) => {
                        return <p className="lead sub-text text-lg text-center" key={key}>{i}</p>;
                    })}
                </div>
            </div>
        )
    }

    // row justify-content-between align-content-center
    return (
        <div className="my-3 py-3 bg-black">
            <div className={proceed ? "invisible" : "visible"}>
                <div className="popup">
                    <button onClick={() => setProceed(true)} className="bg-danger text-light p-3 m-2">\x\</button>
                    <p className="text-center bg-light font-weight-bold p-4 rounded">This is a silent walk tutorial. Each sound recorded in this track is a glimpse into my walks or my friends walks.
                    Each video has its own album cover that was witnessed during the walk. At the end of this playlist,
                        all the sounds are layered and jumbled into a 9 minute long piece. It incapsulates everyone's walking experience into one.</p>
                </div>
            </div>
            <div className={proceed ? "" : "blur"}>
                <div className="my-3">
                    <button className="btn btn-danger d-flex m-auto p-3" onClick={() => setProceed(false)}>Description</button>
                </div>
                <div className="my-3 d-flex justify-content-center">
                    <Dropdown className="text-center">
                        <Dropdown.Toggle>
                            {playlist[v_index].title}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Dropdown.Item onClick={() => setV_index(0)}>Exkishmish Medem – Budh Bazaar</Dropdown.Item>
                            <Dropdown.Item onClick={() => setV_index(1)}>Hum road k musafir hai – Saddar</Dropdown.Item>
                            <Dropdown.Item onClick={() => setV_index(2)}>Stuck in this sinkhole - Gulshan Iqbal</Dropdown.Item>
                            <Dropdown.Item onClick={() => setV_index(3)}>Khushamdeed khatra - Musalman Cutchi Khatri</Dropdown.Item>
                            <Dropdown.Item onClick={() => setV_index(4)}>In the suburbs of Irfan loving Junaid - Safari Park</Dropdown.Item>
                            <Dropdown.Item onClick={() => setV_index(5)}>I love you, Jaanam - Gulistan e Jauhar</Dropdown.Item>
                            <Dropdown.Item onClick={() => setV_index(6)}>Hazaron khauf k taaley - Abdullah Shah Ghazi Mazaar</Dropdown.Item>
                            <Dropdown.Item onClick={() => setV_index(7)}>Choo choo bolay sawari - Cantt Station</Dropdown.Item>
                            <Dropdown.Item onClick={() => setV_index(8)}>Karachi - The City of Walks</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Subtitle></Subtitle>
                <div className="player-wrapper">
                    <ReactPlayer width="100%" height="100%" className="m-auto video-player rounded" url={playlist[v_index].url} />
                </div>
                <div onClick={() => {
                    if (v_index - 1 === -1) { setV_index(playlist.length - 1) } else { setV_index(v_index - 1) }
                }
                } className="prev rounded position-fixed bg-light">
                    <img className="control-left" alt="previous video" src={previous} />
                </div>
                <div onClick={() => {
                    if (v_index + 1 === playlist.length) { setV_index(0) } else { setV_index(v_index + 1) }
                }
                } className="next rounded position-fixed bg-light">
                    <img className="control-right" alt="next video" src={next} />
                </div>
            </div>
        </div>
    )
}