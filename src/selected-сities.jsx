import { useState } from "react";

export default function EnterCities(props) {
    const [open, setOpen] = useState(false);
    function openDropdown() {
        setOpen(true);

        const cityBlock = document.getElementById("cityBlock");
        const listener = (e) => {
            if (!cityBlock.contains(e.target)) {
                setOpen(false);

                document.removeEventListener("click", listener);
            }
        };
        document.addEventListener("click", listener);
    }

    return (
        <>
            <div className={props.isActive ? "cityBlock active" : "cityBlock"} onClick={openDropdown} id="cityBlock">
                <img src={process.env.PUBLIC_URL + "home.png"} className="home" alt=""></img>
            </div>
            {open && <CreateCityBox selectedCities={props.selectedCities}></CreateCityBox>}
        </>
    );
}
function CreateCityBox(props) {
    return (
        <div className="enteredCities">
            <label>Выбранные города:</label>
            {props.selectedCities.length === 0
                ? null
                : props.selectedCities.map((city, index) => (
                      <span className="cityQ" key={index}>
                          {city.country}
                      </span>
                  ))}
        </div>
    );
}
