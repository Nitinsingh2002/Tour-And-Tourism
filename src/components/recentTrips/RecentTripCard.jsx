import tripData from './recentTripData'
import './style.css'



function RecentTripCard() {
    return (
        <>
            <div className='trip_card'>
                {
                    tripData.map((data, index) => (
                        <div className="t-card" key={index}>
                            <div className='t-image'>
                                <img src={data.Image} alt='trip' />
                            </div>
                            <h4>{data.name}</h4>
                            <p>{data.description}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default RecentTripCard;