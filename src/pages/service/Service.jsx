import Hero from '../../components/heroSection/hero';
import Footer from '../../components/footer/Footer'
import ser from '../../assets/ser.jpg';
import RecentTripCard from '../../components/recentTrips/RecentTripCard';

function Service() {
    console.log("hello")
    return (
        <>     
          <Hero
            className={"Aboutt"}
            // img={"https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-woman-on-hilltop-over-forest-under-clouds.jpeg?auto=compress&cs=tinysrgb&w=600"}
            img={ser}
            heading={"Service"}
           
            heroTextClassName={"aboutText"}/>

            <RecentTripCard/>
            <Footer/>
        </>
    )
}

export default Service;