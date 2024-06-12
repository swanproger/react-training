import { useEffect, useState } from "react";
import CreateDrop from "./dropdown";

function Timer() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <span>Время сейчас: {now.toLocaleTimeString()}</span>;
}

export default function Header() {
    return (
        <header>
            <img src={process.env.PUBLIC_URL + "logo192.png"} alt=""></img>
            <h3>React Test</h3>
            <CreateDrop></CreateDrop>
            <Timer />
        </header>
    );
}
