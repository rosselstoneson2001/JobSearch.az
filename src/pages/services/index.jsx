import React, { useState } from "react"
import { useContext } from "react"
import { myDarkTheme } from "../../maninlayout"
import { Link } from "react-router-dom"

export default function Service() {

    const { dark, getToggleRight, getSideMenu } = useContext(myDarkTheme)

    return (
        <div className="services">
            <div className="responsive-logo">

                <Link to="/">
                    <h1 className="responsive-logo-h1 blue" onClick={getToggleRight}>JobSearch</h1>
                </Link>
                <div onClick={getSideMenu}>
                    <box-icon name='menu' color="rgb(187, 187, 187)"></box-icon>
                </div>
            </div>
            <h1 className="services-h1">Xidmətlər</h1>
            <div className={dark ? "service-qiymet1" : "service-qiymet1-active"}>
                <div>
                    <h2>Bir vakansiya</h2>
                    <p>1 ay müddətində aktiv qalır</p>
                </div>
                <p>25 AZN</p>
            </div>
            <div className={dark ? "service-qiymet2" : "service-qiymet2-active"}>
                <div>
                    <h2>5 və daha çox vakansiya</h2>
                    <p>Bir gündə 5 və daha çox elan yerləşdirilməsinə 20% endirim tətbiq olunur</p>
                </div>
                <p>20 AZN(5x)</p>
            </div>
            <div className={dark ? "service-qiymet3" : "service-qiymet3-active"}>
                <div className={dark ? "premium" : "premium-active"}>Premium</div>
                <div>
                    <h2>Premium</h2>
                    <p>Premium iş elanı saytda olan digər elanlardan xüsusi dizayn və Premium qeydi ilə fərqlənərək saytın yuxarı hissəsində, ilk onluqda 1 gün ərzində qalacaq</p>
                </div>
                <p>40 AZN</p>
            </div>

            <div className={dark ? "services-howToUse" : "services-howToUse-active"}>
                <h1>İş elanlarının yerləşdirilməsi</h1>
                <div>
                    <p className="p">İş elanı yerləşdirmək üçün, sizdən vakant iş yeri haqqında məlumatı info@jobsearch.az ünvanına Word formatında göndərməyiniz xahiş olunur. Mətnin daha rahat oxunması üçün bizim tərəfdən müəyyən qrammatik düzəlişlər aparıla bilər. </p>
                </div>
                <div>
                    <p className="p">İşədüzəltmə üzrə beynəlxalq standart və prinsiplərə cavab verməyən, dəfələrlə bu prinsipləri pozmuş, həmçinin qeyri-qanuni fəaliyyətlə məşğul olan işəgötürən şirkətlərin elanlarının saytımızda yerləşdirilməsinə imtina verə bilərik. </p>
                </div>
                <div>
                    <p className="p">İşəgötürən şirkət iş elanında öz şirkət adını göstərməmək hüququna malikdir, lakin bununla belə məxfilik saxlanılmaqla saytın administratoru kimi həmin məlumatlar bizə təqdim olunmalıdır. </p>
                </div>
                <div>
                    <p className="p">Bitmə tarixi qeyd olunmayan iş elanları maksimum tarix olaraq 1 aylıq götürüləcək. Bu müddət əlavə ödəniş olunmaqla artırıla bilər. </p>
                </div>
                <div>
                    <p className="p">İş elanının yerləşdirilməsi üçün Əlaqə bölməsinə də müraciət edə bilərsiniz. </p>
                </div>
                <h1></h1>
            </div>
        </div>
    )
}