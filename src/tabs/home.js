import Card from "../components/card"
import next from "../images/next.png"
import insimg from '../images/walk2.jpeg'

export default function Home() {
    return (
        <div className="mt-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-black row-sm text-center">Manifesto</h1>
                <div className="home-img row-sm mx-4 my-4 w-75">
                    <p className="text-center text-white font-weight-light p-3 bg-black">
                        Behind this screen sits a mattargashti mapping her personal wanders in Karachi.<br />
                    This site is a short attempt at re-evaluating, and re-morphing the survivable glimpses of Karachi.<br />
                    By no means is it unpacking to glorify the state, rather it is a narrowed look at the city- a city that we have all<br />
                    somehow managed to survive in and found unruly ways to meditate in.</p>
                </div>
            </div>
            <div className="bg-black">
                <h1 className="text-white text-lg font-weight-bold text-center mt-2 pt-5">Using this site</h1>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="text-white h-50 mx-3 py-2 border border-white">
                        <ol>
                            <li className="my-2">First. click on its walled city tab. This tab has graffiti and street observations- that I found- re-appropriated into illustrations.
                                Use the red, blue, and green colors to read the finds, the words, and the scribbles. Take your time.<br/>
                            </li>
                            <li className="my-2">
                            Click on the sounds of this city tab. This has snippets of sound recorded with manuals to explore the city as a mindful practice.<br/>
                            </li>
                            <li className="my-2">
                            Click on the city of footage tab. This tab has a movie-like collage of all the liminal spaces in Karachi. Captured, and compiled into one video. It is the stillness of Karachi, those moments that are breathed in silence by all of us, the live-able parts of it.
                            Play, and let yourself get absorbed in this third cinema screening.<br/>
                            </li>
                            <li className="my-2">
                            Click on the city in the writings tab. Scroll through personal journals and my reflective zines.<br/>  
                            </li>
                            <li className="my-2">
                            Now reflect on ways you can wander Karachi.<br/> 
                            </li>
                        </ol>
                    </div>
                    <div className="h-25">
                        <img className="ins-img m-5" src={insimg}/>
                    </div>
                </div>
            </div>
            {/**<div class="d-flex flex-row justify-content-between w-75">
                <Card title="A trip through the city" subtext="sample lorem ipsum uwu awa" cardimg={next} />
                <Card title="A trip through the city" subtext="sample lorem ipsum uwu awa" cardimg={next} />
                <Card title="A trip through the city" subtext="sample lorem ipsum uwu awa" cardimg={next} />
            </div>**/}
            <div className="">
                <h1 className="text-lg font-weight-bold text-center mt-2 pt-5">About Me</h1>
            </div>
        </div>
    )
}