import "./Cursor.css";
import { useEffect } from "react";

export default function Cursor(){

    useEffect(()=>{

        const move=(e)=>{

            document.documentElement.style.setProperty(
                "--cursor-x",
                `${e.clientX}px`
            );

            document.documentElement.style.setProperty(
                "--cursor-y",
                `${e.clientY}px`
            );

        };

        window.addEventListener("mousemove",move);

        return()=>window.removeEventListener("mousemove",move);

    },[]);

    return <div className="cursor"/>

}
