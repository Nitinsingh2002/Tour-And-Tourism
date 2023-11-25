import Hero from '../../components/heroSection/hero';
import Footer from '../../components/footer/Footer'
import contact from '../../assets/contact.jpg';
import ContactForm from '../../components/contactform/ContactForm';
function Contact() {
    console.log("hello")
    return (
        <>
            <Hero
               className={"Aboutt"}
                // img={"https://images.pexels.com/photos/17366637/pexels-photo-17366637/free-photo-of-woman-on-hilltop-over-forest-under-clouds.jpeg?auto=compress&cs=tinysrgb&w=600"}
                img={contact}
                heading={"Contact"}
                heroTextClassName={"aboutText"}
            />
            <ContactForm/>
            <Footer/>
        </>
    )
}

export default Contact;