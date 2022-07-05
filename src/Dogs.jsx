import { useHistory, useParams } from "react-router-dom";

const Dogs = () => {
    const { pictureDimensions } = useParams();
    
    const history = useHistory();
    const navigateToAdoptPage = () => {
        history.push('/dogs/adopt');
    }

    return (
        <div>
            <p>Showing dog {pictureDimensions} x {pictureDimensions}</p> 
            <img src={`https://place-puppy.com/${pictureDimensions}x${pictureDimensions}`}></img>
            <button onClick={navigateToAdoptPage}>Go To Adopt</button>
        </div>
    )
}

export default Dogs;