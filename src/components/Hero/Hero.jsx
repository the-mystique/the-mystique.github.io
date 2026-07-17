import "./Hero.css";
import GlowButton from "../Button/GlowButton";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <p className="hero-tag">
                    Product Engineer • Builder • Systems Thinker
                </p>

                <h1>

                    DOER
                    <br />
                    MYST

                </h1>

                <p className="hero-description">

                    Building products where engineering,
                    business and imagination meet.

                </p>

                <GlowButton />

            </div>

        </section>
    );
}
