import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image
                src="/images/site/ranch-me-brotendo.png"
                alt="Cheers I'll drink to that bro"
                width={300}
                height={300}
            />
        </div>
        <h1>Ranch it up</h1>
        <p>Ranch me brotendo</p>
    </section>
}

export default Hero;