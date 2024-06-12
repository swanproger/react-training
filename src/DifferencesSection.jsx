import { differences } from "./data";
import { useState } from "react";
import Button from "./button";

export default function DifferencesSection() {
    const [content, setContent] = useState(null);

    function handleClick(type) {
        setContent(type);
    }
    return (
        <section>
            <h3 className="other">Чем мы отличаемся от других?</h3>

            <Button isActive={content === "way"} onClick={() => handleClick("way")}>
                Подход
            </Button>
            <Button isActive={content === "easy"} onClick={() => handleClick("easy")}>
                Доступность
            </Button>
            <Button isActive={content === "program"} onClick={() => handleClick("program")}>
                Концентрация
            </Button>
            {content ? <p>{differences[content]}</p> : <p>Нажми на кнопку</p>}
        </section>
    );
}
