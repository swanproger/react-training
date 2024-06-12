import { useEffect, useState, useCallback } from "react";
import Modal from "./Model";
import Button from "./button";
import useInput from "./useInput";

export default function EffectSection() {
    const input = useInput();
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsres] = useState([]);

    const fetchUsers = useCallback(async () => {
        // описываем функционал по запросу на сервер
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        setUsres(users);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <section>
            <h3>Effects</h3>

            <Button
                style={{ marginBottom: " 1rem" }}
                onClick={() => {
                    setModal(true);
                }}
            >
                Открыть информацию
            </Button>
            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae veritatis quaerat ut et aut error obcaecati est soluta, quia
                    nihil officiis quisquam vitae ipsam ducimus. Eius consequuntur numquam pariatur soluta.
                </p>
                <Button
                    onClick={() => {
                        setModal(false);
                    }}
                >
                    Close modal
                </Button>
            </Modal>
            {loading && <p>Loading...</p>}

            {!loading && (
                <>
                    <input type="text" className="control" {...input} />
                    <ul>
                        {users
                            .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
                            .map((user) => (
                                <li key={user.id}>{user.name}</li>
                            ))}
                    </ul>
                </>
            )}
        </section>
    );
}
