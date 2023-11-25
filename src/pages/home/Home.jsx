import Hero from '../../components/heroSection/hero';
import './home.css'
import home from '../../assets/home.jpg';
import Destination from '../../components/destination/Destination'
import RecentTrips from '../../components/recentTrips/RecentTrips';
import Footer from '../../components/footer/Footer';
function Home() {
    
    console.log("hello")

    return (
        <>
            <Hero
                className={"hero"}
                img={home}
                heading={"Your Journey Your Story"}
                paragraph={"choose your favorite destination"}
                button_Name={"Travel Plan"}
                button_className={"show"}
                heroTextClassName={"heroText"}
            />
            <Destination />
            <RecentTrips />
            <Footer />

        </>
    )
}

export default Home;