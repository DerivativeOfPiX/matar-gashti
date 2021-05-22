export default function Card(props){
    return(
        <div className="card shadow rounded border border-white w-25">
        <img className="img-responsive w-25 m-auto card-img-top" alt="cardimg" src={props.cardimg}/>
            <div className="card-body bg-black rounded">
                <h2 className="card-title text-center">{props.title}</h2>
                <p className="card-text text-center">{props.subtext}</p>
            </div>
        </div>
    )
}