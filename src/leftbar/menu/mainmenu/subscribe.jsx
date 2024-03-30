import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { useContext } from "react";
import { myDarkTheme } from "../../../maninlayout";


export default function Aboneler() {

    const { dark, getSideMenu } = useContext(myDarkTheme);

    return !dark ? (
        <NavLink to="/subscribe">
            {({ isActive }) => (
                <div
                    onClick={getSideMenu}
                    className={classNames("subscribe king labor items-center hover:bg-[#0c4dde] transition-colors", {
                        "king labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    {isActive && <box-icon type='solid' color="white" name='envelope'></box-icon>}
                    {!isActive && <box-icon type='solid' color="black" name='envelope'></box-icon>}
                    {!isActive ? <h1>Abunə - kateqoriyalar</h1> : <h1 style={{ color: 'white' }}>Abunə - kateqoriyalar</h1>}
                </div>
            )}
        </NavLink>
    ) : (
        <NavLink to="/subscribe">
            {({ isActive }) => (
                <div
                    className={classNames("king labor subscribe items-center hover:bg-[#0c4dde] transition-colors", {
                        "king labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    <box-icon type='solid' color="white" name='envelope'></box-icon>
                    <h1 style={{ color: 'white' }}>Abunə - kateqoriyalar</h1>
                </div>
            )}
        </NavLink>
    );
}
