import { useContext } from "react"
import { useState } from "react"
import { myDarkTheme } from "../maninlayout"
import { Route, Routes, Outlet, NavLink } from "react-router-dom"
import { Tab } from "@headlessui/react"
import classNames from "classnames"
import { Link } from "react-router-dom"

export default function RightBar() {

    const { detail, data, setDetail, hearts, setHearts, favorites, setFavorites, currentPage, companyFilter, getCompany, handlePageChange, dark, getFetch, getCategory, toggleRight, setToggleRight, getSideMenu } = useContext(myDarkTheme);


    function getHeart(vacantId) {
        setHearts((prevHearts) => ({
            ...prevHearts,
            [vacantId]: !prevHearts[vacantId]
        }));
    }

    function getToggleRight() {
        setToggleRight(prevToggleRight => !prevToggleRight)
    }

    function releaseFavorite(id) {
        setFavorites(favorites.filter(prevFavorites => prevFavorites.id !== id))
    }

    function addToFavorites(favoriteCount) {
        setFavorites([...favorites, favoriteCount])
    }


    function addToRightBar(detals) {

        setDetail(detals)
    }

    if (detail.length == 0) {
        return (

            <aside className="max-w-[10000px] min-w-[100px] flex-1 right-bar0">
                <a href="https://classic.jobsearch.az/">
                    <div className={dark ? "classic-version" : "classic-version-active"}>
                        <div>{
                            !dark ?
                                <box-icon name='right-top-arrow-circle' color="blue" ></box-icon>
                                :
                                <box-icon name='right-top-arrow-circle' color="white" ></box-icon>
                        }
                        </div>
                        <p>Saytın klassik versiyası</p>
                    </div>
                </a>
                <a className="advertise-cont " href="https://kontakt.az/az/telefoniya/telefonlar/smartfonlar?kh_stehsal=Apple&utm_source=jobsearch.az&utm_medium=banner&utm_campaign=iphone+15+128+gb&utm_term=web%2C+jpg%2C+970x1380&utm_content=pm-15%2C+apple%2C+kredit%2C+az&" target="_blank">
                    {/* <img className="advertise-image" src="https://storage.jobsearch.az/storage/pages/1/samsung-b-2.jpeg" alt="" /> */}
                </a>
                <p>Saytda dərc edilmiş vakansiyaların sayı</p>
                <div className="statistic-container">
                    <div className="daily-hesabat">
                        <div>
                            <p>Günlük</p>
                            <p>2</p>
                        </div>
                        <div>
                            <p>Həftəlik</p>
                            <p>16</p>
                        </div>
                    </div>
                    <div className={dark ? "monthly-hesabat" : "monthly-hesabat-active"}>
                        <div>
                            <h2>Aylıq</h2>
                            <p>16</p>
                        </div>
                    </div>
                </div>
            </aside >
        )
    } else {
        return (<>
            {currentPage === "pageVacancy" && (
                <aside className={!toggleRight ? "max-w-[10000px]  flex-1 rightbar-1" : "max-w-[10000px] flex-1 rightbar-2"}>
                    <div className="right-top flex-1">
                        <div>
                            <div onClick={getToggleRight} className="back-menu"><box-icon className="back-menu" name='chevron-left' color='#f2eeee' ></box-icon></div>
                            <img src={detail.image} className="rightbar-logo" alt="" />
                            <p className={!dark ? "right-bar-company" : "right-bar-company-active"}>{detail.company}</p>
                        </div>
                        <div>
                            <div>
                                {
                                    dark ?
                                        <svg clip-rule="evenodd " width="20" height="20" fill-rule="evenodd" fill="rgba(255, 255, 255, 0.5)" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill-rule="nonzero" /></svg>
                                        :
                                        <svg clip-rule="evenodd " width="20" height="20" fill-rule="evenodd" fill="rgba(0, 0, 0, 0.2)" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill-rule="nonzero" /></svg>
                                }
                                <p className={dark ? "looks-white" : "looks-white-active"}>{detail.looks}</p>
                            </div>
                            <div className="heart-icon" onClick={() => getHeart(detail.id)}>
                                {hearts[detail.id] ? (

                                    <box-icon onClick={() => releaseFavorite(detail.id)} type='solid' color="rgb(255, 134, 134)" name='heart'></box-icon>
                                ) : (
                                    dark ?
                                        <img onClick={() => addToFavorites(detail)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAY5JREFUSEvllitTA1EMhU9MMaBQoFCg+P+/AlWHqqKGKhQ1YU7nZsnevY/cLkOZYU3N2XzJyaMruNAjF+Li74NVdSMix55DUV21YlW9AXALgL+bBCT4E8DOkojq8oSLYFW9B3DXqW6fEmJyrYe699ytBbgAPQD4SJFZvXfAA013BeAaAH/Nqb2IvHnxDJxse0wCwiZL7SX2EMCTC0odA1tyJ2mK9eB0W191Dn5OwqOIbFv+qSqDQkR2NV2W5CzmBE4igvksrOlNcwPu52Wq2oPZO7P5NbduBdjHZes4C98HRFU5nSf7AMz6cS409ZozYU4Wwb9R8eRkbbh+ssdsH4viIL6YeznYD8JqeLaeB78BpQNiK8Xkpp6M9jmDLtazBKYtfvGH4RmUOS+2pHWrOeV28sLwCHS2TrmV6WYPwaPQJjjtIIctBB+BdsFR+Cg0BO7Bz4GGwTU4AH6R2H0vTm9tDYc+9goD5+MO/bEMgSuVD1VaPJnR65RVPlTpKrC9HP2ULRU0bHXUlZ7u/4G/AOAT4B+fTCcjAAAAAElFTkSuQmCC" />
                                        :
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXNJREFUSEvllq1SA1EMhU8NGFCoVqGK4v2fAoVDoVoDClUUc5ibnbPZ+5MsHToMMSs2N19yktzdDS5kmwtx8SfAVwA+AwqF/HoV3wK4A8Ang9EIPgF4lSSifrOcW+AdgO2gumNJiMn1jH5vXq0a2EPfAXyUyKxOFVCg+V0DuAHApylF+EGdPZhB98WBMJXUzjHYgwSlHwNbcubHWPfi96xVe/BjcWQv6dgzBqUxuZZpkrOYCqYTwbSFNIMkeq+1dVPVClaZXyrSrWVrXKrDWZhdIJxOk2/Wj7XEck6VrIJ/o+JJydZwnbPH3BIWRXsy9TxYB+EccFWRvZ02oHaB2ErZqnwPwwpT6GI9a2C/+NNAJOAK5bHFlvTuak65XXkZ+BDq18kXxH5n4SHoCMz3GXgYGgFH4SloFDyCp6EZcAvONbHPaHV6W5uQ/dnzPde4qQ9LFlyrPFVp68qM3hFaearSn4LtfOhXtlbNGqmjqnT9/h/4C+FUXx96AQ95AAAAAElFTkSuQmCC" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        <p >{detail.title}</p>
                        <div>
                            <div className={dark ? "lastdate-border" : "lastdate-border-active"}>
                                <box-icon name='time-five' color='#bb9632' ></box-icon>
                                <p className={dark ? "lastdate-white" : "lastdate-white-active"}>{detail.lastDate}</p>
                            </div>
                            <div onClick={() => getCategory(detail.category)}>
                                <p onClick={() => getFetch(detail.category1)} className={dark ? "category-right" : "category-right-active"}>{detail.category}</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <Tab.Group>
                            <Tab.List className="tab-lists">
                                {dark ?
                                    <Tab className={({ selected }) => classNames("outline-none tab-list", selected ? "tab-list-selected" : "none")}>İşin təsviri</Tab>
                                    :
                                    <Tab className={({ selected }) => classNames("outline-none tab-list", selected ? "tab-list-selected-active" : "none")}>İşin təsviri</Tab>
                                }
                                {dark ?
                                    <Tab className={({ selected }) => classNames("outline-none tab-list", selected ? "tab-list-selected" : "none")}>Şirkət haqqında</Tab>
                                    :
                                    <Tab className={({ selected }) => classNames("outline-none tab-list", selected ? "tab-list-selected-active" : "none")}>Şirkət haqqında</Tab>
                                }
                                {dark ?
                                    <Tab className={({ selected }) => classNames("outline-none tab-list", selected ? "tab-list-selected" : "none")}>Digər iş elanları</Tab>
                                    :
                                    <Tab className={({ selected }) => classNames("outline-none tab-list", selected ? "tab-list-selected-active" : "none")}>Digər iş elanları</Tab>
                                }
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel className="outline-none min-h-[600px]">
                                    <div className="job-desc">
                                        <h3 className={dark ? "require-white" : "require-white-active"}>{detail.description.jobDescription}</h3>
                                        <p className={dark ? "requirements-white" : "requirements-white-active"}>{detail.description.duty}</p>
                                    </div>
                                    <div className="job-desc">
                                        <h3 className={dark ? "require-white" : "require-white-active"}>{detail.require}</h3>
                                        <p className={dark ? "requirements-white" : "requirements-white-active"} >{detail.requirements}</p>
                                    </div>
                                    <div className="muraciet">
                                        <div class="myCard">
                                            <div class="innerCard">
                                                <div class="frontSide">
                                                    <box-icon type='solid' color="white" name='up-arrow'></box-icon>
                                                    <p class="titled">Müraciət et</p>

                                                </div>
                                                <div class="backSide">
                                                    <p class="titled">pizzamizza@mail.ru</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel className="outline-none"><div className="company-desc">
                                    <div className="job-desc">
                                        <h3>{detail.aboutCompany}</h3>
                                        <p>{detail.companyDesc}</p>
                                    </div></div></Tab.Panel>
                                <Tab.Panel className="outline-none flex-1">
                                    <div className="elan-container-scroll">
                                        {companyFilter.map(vacant => (
                                            <Link to="/" key={vacant.id} onClick={() => handlePageChange("alternativePage")}>
                                                <div key={vacant.id} className="vacancies" onClick={() => handlePageChange("pageVacancy")}>
                                                    <div className="logo-part" onClick={() => addToRightBar(vacant)}>
                                                        <div>
                                                            <img className="imgVacant" src={vacant.image} alt="" />
                                                        </div>
                                                        <div>
                                                            <h1>{vacant.title}</h1>
                                                            <p>{vacant.company}</p>
                                                        </div>
                                                    </div>
                                                    <div className="eye-svg">
                                                        <div>
                                                            <svg clip-rule="evenodd" width="20" height="20" fill-rule="evenodd" fill="rgba(255, 255, 255, 0.5)" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill-rule="nonzero" /></svg>
                                                            <p>{vacant.looks}</p>
                                                        </div>
                                                        <div>
                                                            <p>{vacant.releaseDate}</p>
                                                        </div>
                                                    </div>
                                                    <p className="premium1">{vacant.variety}</p>
                                                </div>
                                            </Link>
                                        ))}

                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </aside >
            )}
            {currentPage === "pageCompany" && (


                <div className={toggleRight ? "companies-container1 max-w-[10000px] flex-1" : "companies-container max-w-[10000px] flex-1"}>

                    <div className="responsive-logo">

                        <Link to="/">
                            <h1 className="responsive-logo-h1 blue" onClick={getToggleRight}>JobSearch</h1>
                        </Link>
                        <div onClick={getSideMenu}>
                            <box-icon name='menu' color="rgb(187, 187, 187)"></box-icon>
                        </div>
                    </div>
                    <div>


                        <div>
                            <div onClick={getToggleRight}>
                                <box-icon name='left-arrow-alt' color="white"></box-icon>
                            </div>
                            <img src={detail.image} alt="" />
                            <div>
                                <p> {detail.company}</p>
                                <p>{detail.category}</p>
                            </div>
                        </div>

                        <Tab.Group>
                            <Tab.List className="company-tab-lists">
                                <Tab className={({ selected }) => classNames("outline-none company-tab-list1", selected ? "tab-list-selected" : "none")}><p>Şirkət haqqında</p></Tab>
                                <Tab className={({ selected }) => classNames("outline-none company-tab-list2", selected ? "tab-list-selected" : "none")}><p>Son iş elanları</p></Tab>
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel className="company-info outline-none">
                                    Şirkət haqqında:<br /><br />
                                    <p>{detail.aboutCompany}</p>

                                    <br />
                                    Ünvan:
                                    <br />
                                    {detail.location}
                                    <br></br><br />
                                    Əlaqə nömrəsi:<br />
                                    {detail.phoneNumber}
                                    <br />  <br />
                                    Vebsayt:<br />
                                    <a href="#" target="_blank">{detail.webSite}</a>
                                </Tab.Panel>
                                <Tab.Panel className="outline-none">
                                    <div className="elan-container-scroll">
                                        {companyFilter.map(vacant => (
                                            <Link to="/" key={vacant.id}>
                                                <div key={vacant.id} className="vacancies" onClick={() => handlePageChange("pageVacancy")}>
                                                    <div className="logo-part" onClick={() => addToRightBar(vacant)}>

                                                        <div>
                                                            <h1>{vacant.title}</h1>
                                                            <p>{vacant.company}</p>
                                                        </div>
                                                    </div>
                                                    <div className="eye-svg">
                                                        <div>
                                                            <svg clip-rule="evenodd" width="20" height="20" fill-rule="evenodd" fill="rgba(255, 255, 255, 0.5)" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill-rule="nonzero" /></svg>
                                                            <p>{vacant.looks}</p>
                                                        </div>
                                                        <div>
                                                            <p>{vacant.releaseDate}</p>
                                                        </div>
                                                    </div>
                                                    <p className="premium1">{vacant.variety}</p>
                                                </div>
                                            </Link>
                                        ))}

                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>

                    </div>
                </div>

            )}

            {currentPage == "alternativePage" && (
                <aside className={!toggleRight ? "max-w-[10000px]  flex-1 rightbar-1" : "max-w-[10000px] flex-1 rightbar-2"}>
                    <div className="right-top flex-1">
                        <div>
                            <div onClick={getToggleRight} className="back-menu"><box-icon name='chevron-left' color='#f2eeee' ></box-icon></div>
                            <img src={detail.image} className="rightbar-logo" alt="" />
                            <p>{detail.company}</p>
                        </div>
                        <div>
                            <div>
                                <svg clip-rule="evenodd " width="20" height="20" fill-rule="evenodd" fill="rgba(255, 255, 255, 0.5)" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill-rule="nonzero" /></svg>
                                <p>{detail.looks}</p>
                            </div>
                            <div className="heart-icon" onClick={() => getHeart(detail.id)}>
                                {hearts[detail.id] ? (

                                    <box-icon onClick={() => releaseFavorite(detail.id)} type='solid' color="rgb(255, 134, 134)" name='heart'></box-icon>
                                ) : (
                                    <img onClick={() => addToFavorites(detail)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAY5JREFUSEvllitTA1EMhU9MMaBQoFCg+P+/AlWHqqKGKhQ1YU7nZsnevY/cLkOZYU3N2XzJyaMruNAjF+Li74NVdSMix55DUV21YlW9AXALgL+bBCT4E8DOkojq8oSLYFW9B3DXqW6fEmJyrYe699ytBbgAPQD4SJFZvXfAA013BeAaAH/Nqb2IvHnxDJxse0wCwiZL7SX2EMCTC0odA1tyJ2mK9eB0W191Dn5OwqOIbFv+qSqDQkR2NV2W5CzmBE4igvksrOlNcwPu52Wq2oPZO7P5NbduBdjHZes4C98HRFU5nSf7AMz6cS409ZozYU4Wwb9R8eRkbbh+ssdsH4viIL6YeznYD8JqeLaeB78BpQNiK8Xkpp6M9jmDLtazBKYtfvGH4RmUOS+2pHWrOeV28sLwCHS2TrmV6WYPwaPQJjjtIIctBB+BdsFR+Cg0BO7Bz4GGwTU4AH6R2H0vTm9tDYc+9goD5+MO/bEMgSuVD1VaPJnR65RVPlTpKrC9HP2ULRU0bHXUlZ7u/4G/AOAT4B+fTCcjAAAAAElFTkSuQmCC" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        <p>{detail.title}</p>
                        <div>
                            <div>
                                <box-icon name='time-five' color='#bb9632' ></box-icon>
                                <p>{detail.lastDate}</p>
                            </div>
                            <div>
                                <p>{detail.category}</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <Tab.Group>
                            <Tab.List className="tab-lists">
                                <Tab className={({ selected }) => classNames("outline-none tab-list", selected ? "tab-list-selected" : "none")}>İşin təsviri</Tab>
                                <Tab className={({ selected }) => classNames("outline-none tab-list", selected ? "tab-list-selected" : "none")}>Şirkət haqqında</Tab>
                                <Tab className={({ selected }) => classNames("outline-none tab-list", selected ? "tab-list-selected" : "none")}>Digər iş elanları</Tab>
                            </Tab.List>
                            <Tab.Panels>
                                <Tab.Panel className="outline-none">
                                    <div className="job-desc">
                                        <h3>{detail.description.jobDescription}</h3>
                                        <p>{detail.description.duty}</p>
                                    </div>
                                    <div className="job-desc">
                                        <h3>{detail.require}</h3>
                                        <p >{detail.requirements}</p>
                                    </div>
                                    <div className="muraciet">
                                        <div class="myCard">
                                            <div class="innerCard">
                                                <div class="frontSide">
                                                    <box-icon type='solid' color="white" name='up-arrow'></box-icon>
                                                    <p class="titled">Müraciət et</p>

                                                </div>
                                                <div class="backSide">
                                                    <p class="titled">pizzamizza@mail.ru</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel className="outline-none"><div className="company-desc">
                                    <div className="job-desc">
                                        <h3>{detail.aboutCompany}</h3>
                                        <p>{detail.companyDesc}</p>
                                    </div></div></Tab.Panel>
                                <Tab.Panel className="outline-none">
                                    <div className="elan-container-scroll max-w-[1000px]">
                                        {companyFilter.map(vacant => (
                                            <Link to="/">
                                                <div key={vacant.id} className="vacancies" onClick={() => handlePageChange("pageVacancy")}>
                                                    <div className="logo-part" onClick={() => addToRightBar(vacant)}>
                                                        <div>
                                                            <img className="imgVacant" src={vacant.image} alt="" />
                                                        </div>
                                                        <div>
                                                            <h1>{vacant.title}</h1>
                                                            <p>{vacant.company}</p>
                                                        </div>
                                                    </div>
                                                    <div className="eye-svg">
                                                        <div>
                                                            <svg clip-rule="evenodd" width="20" height="20" fill-rule="evenodd" fill="rgba(255, 255, 255, 0.5)" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill-rule="nonzero" /></svg>
                                                            <p>{vacant.looks}</p>
                                                        </div>
                                                        <div>
                                                            <p>{vacant.releaseDate}</p>
                                                        </div>
                                                    </div>
                                                    <p className="premium1">{vacant.variety}</p>
                                                </div>
                                            </Link>
                                        ))}

                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </aside >
            )}
        </>


        )
    }
}