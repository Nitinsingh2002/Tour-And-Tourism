import './hero.css'

function Hero({ className, heading, paragraph, img, button_Name, button_className ,heroTextClassName}) {
    return (
        <>
            <div className={className}>
                <img alt='hero_alt' src={img} />

                <div className={heroTextClassName}>
                    <h1>{heading}</h1>
                    <p>{paragraph}</p>
                    <button className={button_className}>{button_Name}</button>
                </div>

            </div>
        </>
    )
}

export default Hero