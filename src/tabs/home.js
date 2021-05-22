import Card from "../components/card"
import next from "../images/next.png"

export default function Home() {
    return (
        <div className="mt-4">
            <div>
                <h1 className="text-black text-center">Manifesto</h1>
                <p className="text-center text-white py-2 mx-4 font-weight-light">
                    Behind this screen sits a mattargashti mapping her personal wanders in Karachi.<br />
                This site is a short attempt at re-evaluating, and re-morphing the survivable glimpses of Karachi.<br />
                By no means is it unpacking to glorify the state, rather it is a narrowed look at the city- a city that we have all<br />
                somehow managed to survive in and found unruly ways to meditate in.</p>
            </div>
            <Card title="A trip through the city" subtext="sample lorem ipsum uwu awa" cardimg={next}/>
            <div>

            </div>
        </div>
    )
}