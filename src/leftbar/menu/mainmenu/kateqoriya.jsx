import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { useContext } from "react";
import { myDarkTheme } from "../../../maninlayout";

export default function Kateqoriyalar() {
    const { dark } = useContext(myDarkTheme);

    return !dark ? (
        <NavLink to="/category">
            {({ isActive }) => (
                <div
                    className={classNames("labor items-center hover:bg-[#0c4dde] transition-colors", {
                        "labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    {isActive && <box-icon type='solid' color="white" name='shapes'></box-icon>}
                    {!isActive && <box-icon type='solid' color="black" name='shapes'></box-icon>}
                    {!isActive ? <h1>Kateqoriyalar</h1> : <h1 style={{ color: 'white' }}>Kateqoriyalar</h1>}
                </div>
            )}
        </NavLink>
    ) : (
        <NavLink to="/category">
            {({ isActive }) => (
                <div
                    className={classNames("labor items-center hover:bg-[#0c4dde] transition-colors", {
                        "labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    <box-icon type='solid' color="white" name='shapes'></box-icon>
                    <h1 style={{ color: 'white' }}>Kateqoriyalar</h1>
                </div>
            )}
        </NavLink>
    );
}





