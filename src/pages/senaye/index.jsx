import React, { useState } from "react"
import { useContext } from "react"
import { myDarkTheme } from "../../maninlayout"
import { Link } from "react-router-dom"

export default function Industry() {

    const { getFetch, dark, getToggleRight, getSideMenu } = useContext(myDarkTheme)

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
                        <input type="text" className={!dark ? "category-search-input" : "category-search-input-active"} placeholder="Sənaye üzrə axtarış" />
                        <div className="category-search-icon"> {
                            dark ?
                                <box-icon name='search-alt-2' color="rgba(255, 255, 255, 0.2)"></box-icon> :
                                <box-icon name='search-alt-2' color="rgba(0, 0, 0, 0.5)"></box-icon>
                        }
                        </div>

                    </div>

                    <div className="elan-container-scroll">

                        <Link to="/">
                            <div className="vacancies" onClick={() => getFetch("biznes")}>
                                <div className="category-info">
                                    <div className="category-image-container">
                                        <img className="category-image" src="https://storage.jobsearch.az/storage/pages/15/biznes-icon.svg" alt="" />
                                    </div>
                                    <div>
                                        <h1 className="category-name">Biznes</h1>
                                        <p className={!dark ? "category-counted" : "category-counted-active"}>2 şirkət</p>
                                    </div>
                                </div>
                                <div className={!dark ? "company-counts" : "company-counts-active"}>
                                    2 iş elanı
                                </div>
                            </div>
                        </Link>

                        <Link to="/">
                            <div className="vacancies" onClick={() => getFetch("komputer")}>
                                <div className="category-info">
                                    <div className="category-image-container">
                                        <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1655/icons8-blockchain-technology-1.svg" alt="" />
                                    </div>
                                    <div>
                                        <h1 className="category-name">İKT</h1>
                                        <p className={!dark ? "category-counted" : "category-counted-active"}>2 şirkət</p>
                                    </div>
                                </div>
                                <div className={!dark ? "company-counts" : "company-counts-active"}>
                                    2 iş elanı
                                </div>

                            </div>

                        </Link>
                        <Link to="/">
                            <div className="vacancies" onClick={() => getFetch("Reklam")}>
                                <div className="category-info">
                                    <div className="category-image-container">
                                        <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1610/erzaq-mehsullarinin-istehsali.svg" alt="" />
                                    </div>
                                    <div>
                                        <h1 className="category-name">Ərzaq məhsullarının istehsalı</h1>
                                        <p className={!dark ? "category-counted" : "category-counted-active"}>2 şirkət</p>
                                    </div>
                                </div>
                                <div className={!dark ? "company-counts" : "company-counts-active"}>
                                    2 iş elanı
                                </div>

                            </div>
                        </Link>
                        <Link to="/">
                            <div className="vacancies" onClick={() => getFetch("qarac")}>
                                <div className="category-info">
                                    <div className="category-image-container">
                                        <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1529/temir-materiallari.svg" alt="" />
                                    </div>
                                    <div>
                                        <h1 className="category-name"> Təmir materialları</h1>
                                        <p className={!dark ? "category-counted" : "category-counted-active"}>2 şirkət</p>
                                    </div>
                                </div>
                                <div className={!dark ? "company-counts" : "company-counts-active"}>
                                    2 iş elanı
                                </div>

                            </div>
                        </Link>
                        <Link to="/">
                            <div className="vacancies" onClick={() => getFetch("otel")}>
                                <div className="category-info">
                                    <div className="category-image-container">
                                        <img className="category-image" src="https://storage.jobsearch.az/storage/pages/13887/tourism.svg" alt="" />
                                    </div>
                                    <div>
                                        <h1 className="category-name">Turizm</h1>
                                        <p className={!dark ? "category-counted" : "category-counted-active"}>2 şirkət</p>
                                    </div>
                                </div>
                                <div className={!dark ? "company-counts" : "company-counts-active"}>
                                    2 iş elanı
                                </div>

                            </div>
                        </Link>
                        <Link to="/">
                            <div className="vacancies" onClick={() => getFetch("huquq")}>
                                <div className="category-info">
                                    <div className="category-image-container">
                                        <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1695/hokumet-iconn.svg" alt="" />
                                    </div>
                                    <div>
                                        <h1 className="category-name">Hüquq və məhkəmə xidmətləri</h1>
                                        <p className={!dark ? "category-counted" : "category-counted-active"}>2 şirkət</p>
                                    </div>
                                </div>
                                <div className={!dark ? "company-counts" : "company-counts-active"}>
                                    2 iş elanı
                                </div>

                            </div>
                        </Link>
                        <Link to="/">
                            <div className="vacancies" onClick={() => getFetch("telim")}>
                                <div className="category-info">
                                    <div className="category-image-container">
                                        <img className="category-image" src="https://storage.jobsearch.az/storage/pages/14/tehsil.svg" alt="" />
                                    </div>
                                    <div>
                                        <h1 className="category-name">Təhsil</h1>
                                        <p className={!dark ? "category-counted" : "category-counted-active"}>2 şirkət</p>
                                    </div>
                                </div>
                                <div className={!dark ? "company-counts" : "company-counts-active"}>
                                    2 iş elanı
                                </div>

                            </div>
                        </Link>

                        <Link to="/">
                            <div className="vacancies" onClick={() => getFetch("elm")}>
                                <div className="category-info">
                                    <div className="category-image-container">
                                        <img className="category-image" src="https://storage.jobsearch.az/storage/pages/1506/kimyavi.svg" alt="" />
                                    </div>
                                    <div>
                                        <h1 className="category-name">Elm, riyaziyyat və statistika</h1>
                                        <p className={!dark ? "category-counted" : "category-counted-active"}>2 şirkət</p>
                                    </div>
                                </div>
                                <div className={!dark ? "company-counts" : "company-counts-active"}>
                                    2 iş elanı
                                </div>

                            </div>
                        </Link>
                    </div>
                </div>
            </div>



        </div>
    )
}