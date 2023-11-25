import Hero from '../../components/heroSection/hero';
import about from '../../assets/about.jpg';
import Footer from '../../components/footer/Footer'
import History from '../../components/history/History';

function About() {
    return (
        <>
            <Hero
                className={"Aboutt"}
                // img={"https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-woman-on-hilltop-over-forest-under-clouds.jpeg?auto=compress&cs=tinysrgb&w=600"}
                img={about}
                heading={"About"}
                heroTextClassName={"aboutText"}
            />
            <History/>
            <Footer />
        </>
    )
}

export default About;