import './style.css'

function ContactForm() {
    console.log("heelo")
    return (
        <>

            <div className="form-container">
                <h1>Send a messge to us!</h1>
            </div>

            <form className='form' >
                <input className='input' placeholder='Name' />
                <input className='input' placeholder='Email' />
                <input className='input' placeholder='Subject' />
                <textarea placeholder='Message'
                    rows='4'
                    className='textara'>

                </textarea>
                <button className='button'>Send Meassage</button>
            </form>
        </>
    )
}

export default ContactForm;