import React, { useState } from "react"
import { useContext } from "react"
import { myDarkTheme } from "../../maninlayout"
import { Link } from "react-router-dom"

function Category() {

    const { getFetch, getCategory, dark, getToggleRight, getSideMenu } = useContext(myDarkTheme)

    return (
        <div>
            <div className="responsive-logo">

                <Link to="/">
                    <h1 className="responsive-logo-h1" onClick={getToggleRight}>JobSearch</h1>
                </Link>
                <div onClick={getSideMenu}>
                    <box-icon name='menu' color="rgb(187, 187, 187)"></box-icon>
                </div>
            </div>
            <div className="category-container">
                <div>
                    <div className="category-search-bar">
                        <input type="text" className={!dark ? "category-search-input" : "category-search-input-active"} placeholder="Kateqoriya üzrə axtarış" />
                        <div className="category-search-icon">
                            {
                                !dark ?
                                    <box-icon name='search-alt-2' color="rgba(0, 0, 0, 0.5)"></box-icon>
                                    :
                                    <box-icon name='search-alt-2' color="rgba(255, 255, 255, 0.2)"></box-icon>
                            }
                        </div>

                    </div>

                    <div className="elan-container-scroll">

                        <Link to="/">

                            <div onClick={() => getCategory("İnzibati,biznes və idarəetmə")}>
                                <div className="vacancies" onClick={() => getFetch("biznes")}>
                                    <div className="category-info">

                                        <div className="category-image-container">
                                            <img className="category-image" src="https://storage.jobsearch.az/storage/pages/850/vector.svg" alt="" />
                                        </div>
                                        <div>
                                            <h1 className="category-name">İnzibati,biznes və idarəetmə</h1>
                                            <p className={!dark ? "category-counted" : "category-counted-active"}>2 iş elanı</p>
                                        </div>
                                    </div>
                                    <div className={!dark ? "company-counts" : "company-counts-active"}>
                                        2 Şirkət
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/">
                            <div onClick={() => getCategory("Komputerləşmə və İKT")}>
                                <div className="vacancies" onClick={() => getFetch("komputer")}>
                                    <div className="category-info">
                                        <div className="category-image-container">
                                            <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1263/money.svg" alt="" />
                                        </div>
                                        <div>
                                            <h1 className="category-name">Komputerləşmə və İKT</h1>
                                            <p className={!dark ? "category-counted" : "category-counted-active"}>2 iş elanı</p>
                                        </div>
                                    </div>
                                    <div className={!dark ? "company-counts" : "company-counts-active"}>
                                        2 Şirkət
                                    </div>

                                </div>
                            </div>

                        </Link>
                        <Link to="/">
                            <div onClick={() => getCategory("Marketing,reklam,çap və nəşriyyat")}>
                                <div className="vacancies" onClick={() => getFetch("Reklam")}>
                                    <div className="category-info">
                                        <div className="category-image-container">
                                            <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1288/icons8-megaphone.svg" alt="" />
                                        </div>
                                        <div>
                                            <h1 className="category-name">Marketinq, reklam, çap və nəşriyyat</h1>
                                            <p className={!dark ? "category-counted" : "category-counted-active"}>2 iş elanı</p>
                                        </div>
                                    </div>
                                    <div className={!dark ? "company-counts" : "company-counts-active"}>
                                        2 Şirkət
                                    </div>

                                </div>
                            </div>
                        </Link>
                        <Link to="/">
                            <div onClick={() => getCategory("Qaraj xidmətləri")}>
                                <div className="vacancies" onClick={() => getFetch("qarac")}>
                                    <div className="category-info">
                                        <div className="category-image-container">
                                            <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1387/istehsalat.svg" alt="" />
                                        </div>
                                        <div>
                                            <h1 className="category-name"> Qaraj xidmətləri</h1>
                                            <p className={!dark ? "category-counted" : "category-counted-active"}>2 iş elanı</p>
                                        </div>
                                    </div>
                                    <div className={!dark ? "company-counts" : "company-counts-active"}>
                                        2 Şirkət
                                    </div>

                                </div>
                            </div>
                        </Link>
                        <Link to="/">
                            <div onClick={() => getCategory("Otel,İaşə,Turizm")}>
                                <div className="vacancies" onClick={() => getFetch("otel")}>
                                    <div className="category-info">
                                        <div className="category-image-container">
                                            <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1471/hotel-n.svg" alt="" />
                                        </div>
                                        <div>
                                            <h1 className="category-name">Otel, İaşə, Turizm</h1>
                                            <p className={!dark ? "category-counted" : "category-counted-active"}>2 iş elanı</p>
                                        </div>
                                    </div>
                                    <div className={!dark ? "company-counts" : "company-counts-active"}>
                                        2 Şirkət
                                    </div>

                                </div>
                            </div>
                        </Link>
                        <Link to="/">
                            <div onClick={() => getCategory("Hüquq və məhkəmə xidmətləri")}>
                                <div className="vacancies" onClick={() => getFetch("huquq")}>
                                    <div className="category-info">
                                        <div className="category-image-container">
                                            <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1375/maliyye.svg" alt="" />
                                        </div>
                                        <div>
                                            <h1 className="category-name">Hüquq və məhkəmə xidmətləri</h1>
                                            <p className={!dark ? "category-counted" : "category-counted-active"}>2 iş elanı</p>
                                        </div>
                                    </div>
                                    <div className={!dark ? "company-counts" : "company-counts-active"}>
                                        2 Şirkət
                                    </div>

                                </div>
                            </div>
                        </Link>
                        <Link to="/">
                            <div onClick={() => getCategory("Təlim və tədris")}>
                                <div className="vacancies" onClick={() => getFetch("telim")}>
                                    <div className="category-info">
                                        <div className="category-image-container">
                                            <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1004/traininng.svg" alt="" />
                                        </div>
                                        <div>
                                            <h1 className="category-name">Təlim və tədris</h1>
                                            <p className={!dark ? "category-counted" : "category-counted-active"}>2 iş elanı</p>
                                        </div>
                                    </div>
                                    <div className={!dark ? "company-counts" : "company-counts-active"}>
                                        2 Şirkət
                                    </div>

                                </div>
                            </div>
                        </Link>

                        <Link to="/">
                            <div onClick={() => getCategory("Elm, riyaziyyat və statistika")}>
                                <div className="vacancies" onClick={() => getFetch("elm")}>
                                    <div className="category-info">
                                        <div className="category-image-container">
                                            <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1179/vector-1.svg" alt="" />
                                        </div>
                                        <div>
                                            <h1 className="category-name">Elm, riyaziyyat və statistika</h1>
                                            <p className={!dark ? "category-counted" : "category-counted-active"}>2 iş elanı</p>
                                        </div>
                                    </div>
                                    <div className={!dark ? "company-counts" : "company-counts-active"}>
                                        2 Şirkət
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Category