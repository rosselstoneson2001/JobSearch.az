import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { useContext } from "react";
import { myDarkTheme } from "../../../maninlayout";

export default function Favorilerim() {

    const { dark, favorites, setFavorites } = useContext(myDarkTheme);




    return !dark ? (
        <NavLink to="/favorites">
            {({ isActive }) => (
                <div
                    className={classNames("king labor items-center hover:bg-[#0c4dde] transition-colors", {
                        "king labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    {isActive && <box-icon type='solid' color="white" name='heart-circle'></box-icon>}
                    {!isActive && <box-icon type='solid' color="black" name='heart-circle'></box-icon>}
                    {!isActive ? <h1>Seçilmiş elanlar</h1> : <h1 style={{ color: 'white' }}>Seçilmiş elanlar</h1>}
                    {!isActive ? <p className="favorite-counts">{favorites.length}</p> : <p className="favorite-counts" style={{ color: "white" }}>{favorites.length}</p>}

                </div>
            )}
        </NavLink>
    ) : (
        <NavLink to="/favorites">
            {({ isActive }) => (
                <div
                    className={classNames("king labor items-center hover:bg-[#0c4dde] transition-colors", {
                        "king labor items-center bg-[#0c4dde] transition-colors black": isActive,
                    })}
                >
                    <box-icon type='solid' color="white" name='heart-circle'></box-icon>
                    <h1 style={{ color: 'white' }}>Seçilmiş elanlar</h1>
                    {!isActive ? <p className="favorite-counts">{favorites.length}</p> : <p className="favorite-counts" style={{ color: "white" }}>{favorites.length}</p>}
                </div>
            )}
        </NavLink>
    );
}