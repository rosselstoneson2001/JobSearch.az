import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { myDarkTheme } from "../../../maninlayout";

export default function Labors() {
    const { dark } = useContext(myDarkTheme);

    return !dark ? (
        <NavLink to="/">
            {({ isActive }) => (
                <div
                    className={classNames("labor items-center hover:bg-[#0c4dde] transition-colors", {
                        "labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    {isActive && <box-icon type="solid" color="white" name="briefcase-alt-2"></box-icon>}
                    {!isActive && <box-icon type="solid" color="black" name="briefcase-alt-2"></box-icon>}
                    {!isActive ? <h1>Elanlar</h1> : <h1 style={{ color: 'white' }}>Elanlar</h1>}
                </div>
            )}
        </NavLink>
    ) : (
        <NavLink to="/">
            {({ isActive }) => (
                <div
                    className={classNames("labor items-center hover:bg-[#0c4dde] transition-colors", {
                        "labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    <box-icon type="solid" color="white" name="briefcase-alt-2"></box-icon>
                    <h1 style={{ color: 'white' }}>Elanlar</h1>
                </div>
            )}
        </NavLink>
    );
}
