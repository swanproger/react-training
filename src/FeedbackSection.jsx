import { useState, useRef } from "react";
import Button from "./button";

function StateVsRef() {
    const input = useRef();
    const [show, setShow] = useState(false);

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            setShow(true);
        }
    }

    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input ref={input} type="text" className="control" onKeyDown={handleKeyDown}></input>
        </div>
    );
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: "",
        hasError: false,
        reason: "help",
    });

    function handleNameChange(event) {
        setForm((past) => ({
            ...past,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }));
    }

    function toggleError() {
        setForm((prev) => ({ ...prev, hasError: !form.hasError }));
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <Button onClick={toggleError}>Toggle Error</Button>

            <form style={{ marginBottom: "1rem" }}>
                <label htmlFor="name">Ваше имя</label>
                <input
                    type="text"
                    className="control"
                    id="name"
                    value={form.name}
                    style={{
                        border: form.hasError ? "1px solid red" : null,
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) => setForm((past) => ({ ...past, reason: event.target.value }))}
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>
                <pre>{JSON.stringify(form, null, 2)}</pre>
                <Button disabled={form.hasError} isActive={!form.hasError}>
                    Отправить
                </Button>
            </form>
            <hr></hr>
            <StateVsRef></StateVsRef>
        </section>
    );
}
