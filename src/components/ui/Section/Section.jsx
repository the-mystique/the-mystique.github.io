import "./Section.css";
import Container from "../Container/Container";

export default function Section({
    id,
    title,
    subtitle,
    children,
    className = ""
}) {

    return (

        <section
            id={id}
            className={`section ${className}`}
        >

            <Container>

                {title && (

                    <h2 className="section__title">

                        {title}

                    </h2>

                )}

                {subtitle && (

                    <p className="section__subtitle">

                        {subtitle}

                    </p>

                )}

                <div className="section__content">

                    {children}

                </div>

            </Container>

        </section>

    );

}