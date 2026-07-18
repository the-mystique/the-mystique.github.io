import "./Button.css";

export default function Button({

    children,

    variant="primary",

    onClick

}){

    return(

        <button

            className={`button button--${variant}`}

            onClick={onClick}

        >

            {children}

        </button>

    );

}