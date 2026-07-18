import "./Hero.css";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";

export default function Hero(){

    return(

        <section className="hero">

            <Container>

                <div className="hero__content">

                    <p className="hero__tag">

                        Engineer • Innovator • Systems Thinker

                    </p>

                    <h1 className="hero__title">

                        SYED
                        <br />
                        ZULQARNAIN
                        <br />
                        HAIDER

                    </h1>

                    <p className="hero__description">

                        Building products where engineering,
                        business and imagination meet.

                    </p>

                    <Button>

                        BEGIN

                    </Button>

                </div>

            </Container>

        </section>

    );

}