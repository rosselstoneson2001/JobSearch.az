import Haqqimizda from "./footerMenu/haqqimizda"
import Xidmetler from "./footerMenu/xxidmetler"
import Elaqe from "./footerMenu/elaqe"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { myDarkTheme } from "../../maninlayout"

export default function Footer() {

    const { dark } = useContext(myDarkTheme)

    return (

        <footer>
            <div className="footer-menu">
                <div className={!dark ? "footer-nav" : "footer-nav-active"}>
                    <Link to="/aboutus">
                        <Haqqimizda />
                    </Link>
                    <Link to="/services">
                        <Xidmetler />
                    </Link>
                    <Link to="/communication">
                        <Elaqe />
                    </Link>
                </div>

                <div className={!dark ? "copyright" : "copyright-active"}>
                    <p>© JobSearch.az 2006—2023</p>
                </div>



            </div>

            <div className={!dark ? "creatorOfWebsite" : "creatorOfWebsite-active"}>
                <div>
                    <p>Site by</p>
                </div>
                <div>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI0ZGQ0EwNSIgZD0iTTAgMGgxNC4zNzN2MTQuMzczSDB6Ii8+PHBhdGggZD0iTTEwLjM5NyAzLjIzOWwuMjY2LS4wOTQtLjMwOC0uNzY2LTEuNjA3LjU2OS4yMDMuNTA1LjAwNy4wMTguMDY1LjE2MWMuMzU2LjkxOCAxLjc4NCA1LjExMy0xLjc1MiA1LjM5OHYuMDAxaC0uMTgzVjkuMDNjLTMuNzczLS4zMDUtMS44NzgtNS4wODctMS42OS01LjU0bC4yNjMtLjYxNy0xLjU5Ni0uNTk5LS4zMjMuNzYuMjg1LjEwN0MyLjA5IDYuNDgzIDIuMzIzIDguMDk2IDIuMzIzIDguMDk2Yy4zNiAzLjcyNCA0LjMyOCAzLjk4NCA0LjczMSA0LjAwMXYuMDAxaC4yMTdzNC4zOTgtLjA3NyA0Ljc3OS00LjAwMmMwIDAgLjIzLTEuNTgyLTEuNjUzLTQuODU3eiIgZmlsbD0iIzAwMCIvPjxlbGxpcHNlIGN4PSI0LjA0MyIgY3k9IjUuNTA2IiByeD0iLjM0MyIgcnk9Ii4zMjIiIGZpbGw9IiNGRkNBMDUiLz48ZWxsaXBzZSBjeD0iMy40MiIgY3k9IjcuNzkxIiByeD0iLjM0MyIgcnk9Ii4zMjIiIGZpbGw9IiNGRkNBMDUiLz48ZWxsaXBzZSBjeD0iNC4yMzMiIGN5PSIxMC4wMyIgcng9Ii4zNDMiIHJ5PSIuMzIyIiBmaWxsPSIjRkZDQTA1Ii8+PGVsbGlwc2UgY3g9IjEwLjQyMiIgY3k9IjUuNTA2IiByeD0iLjM1OCIgcnk9Ii4zMjIiIGZpbGw9IiNGRkNBMDUiLz48ZWxsaXBzZSBjeD0iMTAuOTM4IiBjeT0iNy43OTEiIHJ4PSIuMzU4IiByeT0iLjMyMiIgZmlsbD0iI0ZGQ0EwNSIvPjxlbGxpcHNlIGN4PSIxMC4yMjQiIGN5PSIxMC4wMyIgcng9Ii4zNTgiIHJ5PSIuMzIyIiBmaWxsPSIjRkZDQTA1Ii8+PC9zdmc+" alt="Jeykhun Imanov Studio"></img>
                </div>
                <div>
                    <a href="https://jis.az/" target="_blank">Jeykhun Imanov Studio</a>
                </div>
            </div>

        </footer >
    )
}