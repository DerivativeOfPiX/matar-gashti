import insimg from '../images/walk2.jpeg'
import anita from '../images/anita.jpg'
import hamza from '../images/hamza.jpg'

export default function Home() {
    return (
        <div className="mt-4">
            {/* <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-black row-sm text-center">Manifesto</h1>
                <div className="home-img row-sm mx-4 my-4 w-75">
                    <p className="text-center text-white font-weight-light p-3 bg-black">
                        Behind this screen sits a mattargashti mapping her personal wanders in Karachi.<br />
                    This site is a short attempt at re-evaluating, and re-morphing the survivable glimpses of Karachi.<br />
                    By no means is it unpacking to glorify the state, rather it is a narrowed look at the city- a city that we have all<br />
                    somehow managed to survive in and found unruly ways to meditate in.</p>
                </div>
            </div> */}
            <div className="bg-black">
                <h1 className="text-white text-lg font-weight-bold text-center mt-2 pt-5">How to Navigate ?</h1>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="text-white h-50 w-100 mx-3 py-5 border border-white">
                        <ol>
                            <li className="my-3">First. click on Interactive Art tab. This tab has graffiti and street observations re-appropriated into illustrations.
                                Use the red, blue, and green colors to read the finds, the words, and the scribbles. Take your time.<br/>
                            </li>
                            <li className="my-3">
                            Click on the Sounds of this City tab. This has snippets of ambience recorded, with a manual guide to explore the city. Consider this a mindful practice.<br/>
                            </li>
                            <li className="my-3">
                            Click on the Liminally Karachi tab. This tab has a movie-like collage of all the liminal spaces in Karachi. This is approached with a citizen's lens. Captured, and compiled into one video.
                            Play, and let yourself get absorbed in this third cinema screening.<br/>
                            </li>
                            <li className="my-3">
                            Click on the Written City tab. Scroll through personal journals and my reflective zines.<br/>  
                            </li>
                            <li className="my-3">
                            Now reflect on ways YOU can wander Karachi.<br/> 
                            </li>
                        </ol>
                    </div>
                    <div className="h-25">
                        <img alt="" className="ins-img m-5" src={insimg}/>
                    </div>
                </div>
            </div>
            {/**<div class="d-flex flex-row justify-content-between w-75">
                <Card title="A trip through the city" subtext="sample lorem ipsum uwu awa" cardimg={next} />
                <Card title="A trip through the city" subtext="sample lorem ipsum uwu awa" cardimg={next} />
                <Card title="A trip through the city" subtext="sample lorem ipsum uwu awa" cardimg={next} />
            </div>**/}
            <div className="bg-black">
                <h1 className="text-lg text-white font-weight-bold text-center mt-2 pt-5 mx-3">About Me</h1>
                <div className="d-flex flex-row align-items-center justify-content-between">
                    <div className="m-5 w-50"><img className="w-100 h-100" src={anita} alt=""/></div>
                    <div className="w-75 p-2 font-weight-bold border border-white about-text">
                        <p className="text-white text-center m-2">Anita Zehra is a South Asian visual artist and a writer.<br/>
                            She is currently graduating from Habib University with a major in Communication and Design, and a minor in English Comparative Literature.<br/>
                            She is a recent graduate of Iowa International Writing Program 2020-21.<br/>
                            Her work is enchanted by the city,driven by constant rumination and imagined sauntering of Karachi streets.<br/>
                            Her artistic mediums offer illustrated reminiscences of things she experiences in this city.<br/>
                            The content and design on this site is created by her.<br/>
                        </p>
                        <p className="text-white font-weight-bold text-center py-2"><b>instagram: @fiercedork // email: anitazehra2@gmail.com</b></p>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <h1 className="text-lg text-white font-weight-bold text-center mt-2 pt-5 mx-3">Website Designer</h1>
                <div className="d-flex flex-row align-items-center justify-content-between">
                    <div className="w-75 p-2 font-weight-bold border border-white about-text">
                        <p className="text-white text-center m-2">Hamza Asad is a student at Habib University, currently a rising sophomore.<br/>
                        He studies Computer Sciences and has a passion for developing video games some day.<b/>
                        </p>
                        <a className="m-auto text-center" href="https://derivativeofpix.github.io/">Personal Website</a>
                    </div>
                    <div className="m-5 w-50"><img className="w-100 h-100" src={hamza} alt=""/></div>
                </div>
            </div>

                <p className="bg-black mt-3 w-75 text-white text-center p-4 m-auto"><i>Since we live in a codependent world, this is a short thank you note to everyone who helped make this thesis a possibility. 
                    Special mention to Hamza Asad, Asad Aly, Luluwa Lokhandwala, Arooma Naqvi for being so generous with their resources.</i></p>

        </div>
    )
}