import './destination.css'
import data from './destinationData';




function Destination() {
console.log("heelo")
    return (
        <>
            <div className="destination">
                <h1 className='destination_Heading' >Popular Destination</h1>
                <p className='destination_paragraph'>Tour gives you Oppurtunity to see a lot, within a time frame</p>


                {data.map((destination, index) => (
                    <div  className={index % 2 === 0 ? 'firstDestination' : 'firstDestination-reverse'} key={index}>
                        <div className="text_description">
                            <h2>{destination.name}</h2>
                            <p>{destination.description}</p>
                        </div>
                        <div className='firstDescription_image'>
                            {destination.images.map((image, imgIndex) => (
                                <img key={imgIndex} src={image} alt={destination.name} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )

}

export default Destination;