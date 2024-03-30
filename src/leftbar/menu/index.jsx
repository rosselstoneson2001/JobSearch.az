import Labors from "./mainmenu/elan";
import Kateqoriyalar from "./mainmenu/kateqoriya";
import Industries from "./mainmenu/senayeler";
import Companies from "./mainmenu/sirketler";
import Favorilerim from "./mainmenu/favoriler";
import Aboneler from "./mainmenu/subscribe";
import DarkMode from "./mainmenu/dark-lightmode";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { myDarkTheme } from "../../maninlayout";



export default function Menu() {

    const { dark } = useContext(myDarkTheme)

    return (
        <div className="left-bar-container">

            <div className="menu" >

                <Labors />

                <Kateqoriyalar />


                <Industries />


                <Companies />



            </div>

            <div className="menu">
                <div className="your-jobsearch">
                    <span className={!dark ? "your-jobsearch" : "your-jobsearch-active"}>Sizin JobSearch</span>
                </div>

                <Favorilerim />


                <Aboneler />


                <div>
                    <DarkMode />
                </div>
            </div>


        </div>
    )
}