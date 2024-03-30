import Logo from "./logo"
import Menu from "./menu"
import Footer from "./footer"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { myDarkTheme } from "../maninlayout"

function LeftBar() {

    const { dark } = useContext(myDarkTheme);

    return (

        <aside className="w-full min-h-screen  max-h-screen flex flex-col   ">
            <div className="min-h-screen max-h-screen">
                <div className="logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                    <form className={!dark ? "form-active" : null}>
                        <select >
                            <option className={dark ? "option-active" : null}>AZ</option>
                            <option className={dark ? "option-active" : null}>EN</option>
                            <option className={dark ? "option-active" : null}>RU</option>
                        </select>
                    </form>

                </div>
                <div>
                    <Menu />
                    <Footer />
                </div>
            </div>
        </aside>
    )
}


export default LeftBar