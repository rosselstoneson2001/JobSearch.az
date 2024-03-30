import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { useContext } from "react";
import { myDarkTheme } from "../../../maninlayout";

export default function Industries() {

    const { dark } = useContext(myDarkTheme);

    return !dark ? (
        <NavLink to="/industry">
            {({ isActive }) => (
                <div
                    className={classNames("labor items-center hover:bg-[#0c4dde] transition-colors", {
                        "labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    {isActive && <box-icon type='solid' color="white" name='factory'></box-icon>}
                    {!isActive && <box-icon type='solid' color="black" name='factory'></box-icon>}
                    {!isActive ? <h1>Sənaye</h1> : <h1 style={{ color: 'white' }}>Sənaye</h1>}
                </div>
            )}
        </NavLink>
    ) : (
        <NavLink to="/industry">
            {({ isActive }) => (
                <div
                    className={classNames("labor items-center hover:bg-[#0c4dde] transition-colors", {
                        "labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    <box-icon type='solid' color="white" name='factory'></box-icon>
                    <h1 style={{ color: 'white' }}>Sənaye</h1>
                </div>
            )}
        </NavLink>
    );
}