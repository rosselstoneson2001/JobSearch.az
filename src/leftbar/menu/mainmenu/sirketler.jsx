import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { useContext } from "react";
import { myDarkTheme } from "../../../maninlayout";

export default function Companies() {

    const { dark } = useContext(myDarkTheme);

    return !dark ? (
        <NavLink to="/company">
            {({ isActive }) => (
                <div
                    className={classNames("company items-center hover:bg-[#0c4dde] transition-colors", {
                        "labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    {isActive && <box-icon type='solid' color="white" name='business'></box-icon>}
                    {!isActive && <box-icon type='solid' color="black" name='business'></box-icon>}
                    {!isActive ? <h1>Şirkətlər</h1> : <h1 style={{ color: 'white' }}>Şirkətlər</h1>}
                </div>
            )}
        </NavLink>
    ) : (
        <NavLink to="/company">
            {({ isActive }) => (
                <div
                    className={classNames("labor company items-center hover:bg-[#0c4dde] transition-colors", {
                        "labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    <box-icon type='solid' color="white" name='business'></box-icon>
                    <h1 style={{ color: 'white' }}>Şirkətlər</h1>
                </div>
            )}
        </NavLink>
    );
}



