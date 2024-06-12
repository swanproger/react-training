import { createContext, useContext, useState } from "react";
import { contries } from "./data";
import EnterCities from "./selected-сities";
import { createPortal } from "react-dom";

const SelectedCitiesContext = createContext();

export default function CreateDrop() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState("");
    const [selectedCities, setSelectedCities] = useState([]);
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

    function checkIsActive() {
        return selectedCities.length !== 0;
    }

    return (
        <SelectedCitiesContext.Provider value={{ selectedCities, setSelectedCities, setshowClue }}>
            <div className="selCities">
                {showClue && <CityClue></CityClue>}
                <EnterCities selectedCities={selectedCities} isActive={checkIsActive()}></EnterCities>
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

function CreateDropdown() {
    // TODO: Избавиться от этого, брать значение из form
    const country = document.getElementById("country");
    const { selectedCities, setSelectedCities, setshowClue } = useContext(SelectedCitiesContext);
    /*  const adc = {x: 1} <=> const {x} = {x:1} */

    function updateSelectedCities(city) {
        if (selectedCities.find((x) => x.id === city.id)) {
            setSelectedCities((prev) => prev.filter((x) => x.id !== city.id));
        } else {
            setSelectedCities((prev) => prev.concat([city]));
            if (selectedCities.length === 0) {
                setshowClue(true);
                setTimeout(() => {
                    setshowClue(false);
                }, 7000);
            }
        }
    }

    function isCityChecked(id) {
        return selectedCities.find((x) => x.id === id) ?? false; // если левая null или undef будет использована правая
    }

    return (
        <div className="drop" id="drop">
            {contries
                .filter((city) => city.country.toLowerCase().includes(country.value.toLowerCase()))
                .map((city, index) => (
                    <div className="customSelect" key={index}>
                        <input
                            type="checkbox"
                            checked={isCityChecked(city.id)}
                            className="checkcountry"
                            onChange={() => {
                                updateSelectedCities(city);
                            }}
                        />
                        <label className="city">{city.country}</label>
                    </div>
                ))}
        </div>
    );
}
function CityClue() {
    return createPortal(<div className="Clue">У вас есть выбраннные города</div>, document.getElementById("model"));
}
