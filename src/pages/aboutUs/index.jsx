import React, { useState } from "react"
import { useContext } from "react"
import { myDarkTheme } from "../../maninlayout"
import { Link } from "react-router-dom"

export default function AboutUs() {

    const { dark, getToggleRight, getSideMenu } = useContext(myDarkTheme)

    return (
        <div className="relative">
            <div className="responsive-logo">

                <Link to="/">
                    <h1 className="responsive-logo-h1 blue" onClick={getToggleRight}>JobSearch</h1>
                </Link>
                <div onClick={getSideMenu}>
                    <box-icon name='menu' color="rgb(187, 187, 187)"></box-icon>
                </div>
            </div>
            <div className="aboutus">
                <h1 className="aboutus-h1">Haqqımızda</h1>
                <div className={dark ? "aboutus-bar" : "aboutus-bar-active"}>
                    <h2 className={dark ? "jobsearch-blue" : "jobsearch-blue-active"}>JobSearch.az</h2>
                    <p className={dark ? "aboutus-bar-p" : "aboutus-bar-p-active"}>Azərbaycanda iş axtarışı üçün<br /> nəzərdə tutulmuş onlayn <br />platformadır.</p>
                </div>

                <div className={dark ? "aboutus-maintext" : "aboutus-maintext-active"}>
                    <p>Yarandığı, 2005-ci ildən bu günədək sayt illər boyu reytinq üzrə Azərbaycanda ən populyar iş axtarışı saytı olaraq qalır. </p>
                    <p>Biz ilk növbədə iş axtarışında olanlara dəstək olmağa çalışırıq, onlara iş axtarışı və şirkətləri tədqiq etmək üçün təmənnasız imkanlar yaradırıq. Hər gün minlərlə iş axtarışında olan insanlar üçün yeni iş imkanları yaradırılır. </p>
                    <p>Dəyərli müştərilərimiz olan şirkətlər haqqında da daima düşünürük və onların əmək bazarında daha da yaxşı tanıdılmasında və ən yaxşı namizədlərin tapılmasında dəstək oluruq. Müştərilərimiz arasında beynəlxalq və yerli neft və qeyri-neft şirkətləri, dövlət qurumlarını, maliyyə institutlarını, qeyri-hökümət təşkilatlarını, orta və kiçik sahibkarları və s. yer tutur. </p>
                    <p>Saytın istifadəçilərini minlərlə müştərilər və on minlərlə iş axtarışında olan istifadəçilər təşkil edir.</p>
                </div>
            </div>
        </div>
    )
}