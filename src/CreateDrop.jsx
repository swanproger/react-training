import { useState, useEffect } from "react";
import EnterCities from "./selected-сities";
import { SelectedCitiesContext, CityClue, CreateDropdown } from "./dropdown";

export default function CreateDrop() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState();
    const [selectedCities, setSelectedCities] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [showClue, setshowClue] = useState(false);

    function openDropdown() {
        setOpen(true);
        const dropdown = document.getElementById("dropdown");
        const listener = (e) => {
            if (!dropdown.contains(e.target)) {
                setOpen(false);
                document.removeEventListener("click", listener);
            }
        };
        document.addEventListener("click", listener);
    }
    useEffect(() => {
        if (selectedCities.length !== 0) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [selectedCities]);
    var one_call = false;
    useEffect(() => {
        if (selectedCities.length > 0 && selectedCities.length <= 1 && one_call == false) {
            setshowClue(true);
            setTimeout(() => {
                setshowClue(false);
            }, 7000);
        }
        one_call = true;
    }, [selectedCities]);

    return (
        <SelectedCitiesContext.Provider value={{ selectedCities, setSelectedCities }}>
            <div className="selCities">
                {showClue && <CityClue></CityClue>}
                <EnterCities onClick={selectedCities} isActive={isActive}></EnterCities>
                <div className="dropdown" id="dropdown">
                    <input
                        type="text"
                        placeholder="Укажите город(а)"
                        value={form}
                        className="country"
                        id="country"
                        onChange={(event) => {
                            setForm(event.target.value);
                        }}
                        onClick={openDropdown}
                    ></input>
                    {open && <CreateDropdown></CreateDropdown>}
                </div>
            </div>
        </SelectedCitiesContext.Provider>
    );
}
