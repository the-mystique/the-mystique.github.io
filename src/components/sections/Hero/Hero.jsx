import "./Hero.css";
import Button from "../../ui/Button/Button";

export default function Hero() {
    return (
        <section className="hero">

            <div className="hero__content">

                <p className="hero__tag">
                    Product Engineer • Builder • Systems Thinker
                </p>

                <h1>

                    DOER
                    <br />
                    MYST

                </h1>

                <p className="hero__description">

                    Building products where engineering,
                    business and imagination meet.

                </p>

                <Button />

            </div>

        </section>
    );
}
