import { Outlet } from "react-router-dom"
import LeftBar from "../leftbar"
import RightBar from "../rightbar"
import { createContext, useEffect, useState } from "react"
import Labors from "../leftbar/menu/mainmenu/elan"
import Kateqoriyalar from "../leftbar/menu/mainmenu/kateqoriya"
import Industries from "../leftbar/menu/mainmenu/senayeler"
import Companies from "../leftbar/menu/mainmenu/sirketler"
import Favorilerim from "../leftbar/menu/mainmenu/favoriler"
import Aboneler from "../leftbar/menu/mainmenu/subscribe"
import DarkMode from "../leftbar/menu/mainmenu/dark-lightmode"
import { Link } from "react-router-dom"
import Footer from "../leftbar/footer"

export const myDarkTheme = createContext(null)

function MainLayout() {

    const [dark, setDark] = useState(true);
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState([]);
    const [hearts, setHearts] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [currentPage, setCurrentPage] = useState('pageVacancy');
    const [companyFilter, setCompanyFilter] = useState([]);
    const [toggleRight, setToggleRight] = useState(true);
    const [sideMenuToggle, setSideMenuToggle] = useState(true);






    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    function getSideMenu() {
        setSideMenuToggle(prevSideMenu => !prevSideMenu)
    }

    function getFetch(category) {
        if (category == "all") {
            fetch("http://localhost:3000/vacancies")
                .then(res => res.json())
                .then(data => setData(data))
            setCategoryFilter(null)
        } else {
            fetch(`http://localhost:3000/vacancies?category1=${category}`)
                .then(res => res.json())
                .then(data => setData(data))
        }
    }

    function getCompany(company) {
        if (company == "whole") {
            fetch(`http://localhost:3000/vacancies`)
                .then(res => res.json())
                .then(data => setCompanyFilter(data))
        } else {
            fetch(`http://localhost:3000/vacancies?company=${company}`)
                .then(res => res.json())
                .then(data => setCompanyFilter(data))
        }

    }



    function getToggleRight() {
        setToggleRight(true)
    }

    useEffect(() => {
        getCompany("whole")
    }, [])


    function getCategory(category) {
        setCategoryFilter(category)
        setToggleRight(true)
    }

    useEffect(() => {
        getFetch("all")
    }, [])

    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        const storedData = JSON.parse(localStorage.getItem("myData")) || [];
        const storedDetail = JSON.parse(localStorage.getItem("myDetail")) || [];
        const storedHearts = JSON.parse(localStorage.getItem("myHearts")) || {};
        const storedFavorites = JSON.parse(localStorage.getItem("myFavorites")) || [];
        const storedCategoryFilter = localStorage.getItem("myCategoryFilter") || "";
        const storedCurrentPage = localStorage.getItem("myCurrentPage") || "pageVacancy";
        const storedCompanyFilter = JSON.parse(localStorage.getItem("myCompanyFilter")) || [];

        if (storedDarkMode !== null) setDark(JSON.parse(storedDarkMode));
        if (storedData !== null) setData(storedData);
        if (storedDetail !== null) setDetail(storedDetail);
        if (storedHearts !== null) setHearts(storedHearts);
        if (storedFavorites !== null) setFavorites(storedFavorites);

        if (storedCurrentPage !== null) setCurrentPage(storedCurrentPage);
        if (storedCompanyFilter !== null) setCompanyFilter(storedCompanyFilter);
    }, []);

    // Save states to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(dark));
        localStorage.setItem("myData", JSON.stringify(data));
        localStorage.setItem("myDetail", JSON.stringify(detail));
        localStorage.setItem("myHearts", JSON.stringify(hearts));
        localStorage.setItem("myFavorites", JSON.stringify(favorites));
        localStorage.setItem("myCategoryFilter", categoryFilter);
        localStorage.setItem("myCurrentPage", currentPage);
        localStorage.setItem("myCompanyFilter", JSON.stringify(companyFilter));
    }, [dark, data, detail, hearts, favorites, categoryFilter, currentPage, companyFilter]);


    return (
        <myDarkTheme.Provider value={{ dark, setDark, data, detail, setDetail, hearts, setHearts, favorites, setFavorites, getFetch, categoryFilter, getCategory, currentPage, setCurrentPage, handlePageChange, getCompany, companyFilter, toggleRight, setToggleRight, getToggleRight, getSideMenu }}>
            <div className={dark ? "mainlayout w-full mx-auto my-auto  flex" : "active w-full mx-auto my-auto  flex"}>
                <div className="relative max-w-[1000px]">
                    <div className={!sideMenuToggle ? "fixed side-menu" : "fixed side-menu-active"}>
                        <div>

                            <div onClick={getSideMenu} className="flex items-center justify-between mx-[20px] my-[20px]">
                                <h2>  <Link to="/"> JobSearch</Link></h2>
                                <box-icon name='x' color="white"></box-icon>
                            </div>

                            <p className="my-[20px]">Sizin JobSearch</p>
                            <div onClick={() => setToggleRight(true)}>
                                <div onClick={getSideMenu} className="my-[5px]">
                                    <Favorilerim />
                                </div>
                            </div>
                            <div onClick={getSideMenu} className="my-[20px]">
                                <Aboneler />
                            </div>
                            <div onClick={getSideMenu} className="my-[20px]">
                                <DarkMode />
                            </div>
                            <div onClick={() => setToggleRight(true)}>
                                <div onClick={getSideMenu}>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-menu">
                        <div>
                            <Labors />
                        </div>
                        <div onClick={getToggleRight}>
                            <Kateqoriyalar />
                        </div>
                        <div onClick={getToggleRight}>
                            <Industries />
                        </div>
                        <div onClick={getToggleRight}>
                            <Companies />
                        </div>
                    </div>
                </div>
                <div className="left-bar relative">
                    <LeftBar />
                </div>
                <main className="flex-1 flex gap-[30px]">
                    <main className="flex-1  max-w-[2000px]  border-x border-[#ffffff33]">
                        <Outlet />
                    </main>

                    <RightBar />

                </main>
            </div >
        </myDarkTheme.Provider >
    )
}

export default MainLayout