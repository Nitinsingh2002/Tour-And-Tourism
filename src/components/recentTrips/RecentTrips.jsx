import RecentTripCard from './RecentTripCard';
import tripData from './recentTripData';
import './style.css';

function RecentTrips() {
    return (
        <>

            <div className="Trips">
                <h1  >Recent Trips</h1>
                <p >You can discover unique destination using google maps</p>
                <RecentTripCard/>
            </div>
        </>
    )
}

export default RecentTrips;