import React, { useState } from "react"
import { useContext } from "react"
import { myDarkTheme } from "../../maninlayout"
import { Link } from "react-router-dom"

export default function MyFavorites() {

    const { detail, setDetail, favorites, hearts, setHearts, setFavorites, getCompany, dark, getToggleRight, getSideMenu, setSideMenu, setToggleRight } = useContext(myDarkTheme)




    function getHeart(vacantId) {
        setHearts((prevHearts) => ({
            ...prevHearts,
            [vacantId]: !prevHearts[vacantId], // Toggle the state for the specific vacancy
        }))
    };

    function releaseFavorite(id) {
        setFavorites(favorites.filter(prevFavorites => prevFavorites.id !== id))
    }

    function addToFavorites(favoriteCount) {
        setFavorites([...favorites, favoriteCount])
    }

    function addToRightBar(detals) {
        setDetail(detals)
        setToggleRight(prevToggleRight => !prevToggleRight)
    }

    {
        if (favorites.length == 0) {
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
                    <div className="my-favorites-container0">
                        <h1>Seçdiyim iş elanları</h1>

                        <div>
                            <div className={dark ? "heart-container" : "heart-container-active"}>
                                {
                                    dark ?
                                        <box-icon type='solid' color="white" name='heart'></box-icon>
                                        :
                                        <box-icon type='solid' color="rgb(207, 207, 207)" name='heart'></box-icon>
                                }
                            </div>
                            <h2>Sizin seçilmiş elanınız yoxdur</h2>
                            {
                                dark ?
                                    <Link to="/" className="link-from-favorite"><button>Vakansiyaya keçid</button></Link>
                                    :
                                    <Link to="/" className="link-from-favorite-active"><button>Vakansiyaya keçid</button></Link>
                            }
                        </div>
                    </div>
                </div>
            )
        } else {
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
                    <div>
                        <div className="elan-container-scroll">
                            <h1>Seçdiyim iş elanları</h1>
                            {favorites.map(vacant => (

                                <div key={vacant.id} className="vacancies" onClick={() => getCompany(vacant.company)}>
                                    <div className="logo-part max-w-[1000px]" onClick={() => addToRightBar(vacant)}>
                                        <div>
                                            <img className="imgVacant" src={vacant.image} alt="" />
                                        </div>
                                        <div>
                                            <h1>{vacant.title}</h1>
                                            <p className={!dark ? "company-title" : "company-title-active"}>{vacant.company}</p>
                                        </div>
                                    </div>
                                    <div className="eye-svg">
                                        <div>
                                            {dark ?
                                                <svg clip-rule="evenodd" width="20" height="20" fill-rule="evenodd" fill="rgba(255, 255, 255, 0.5)" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.
                                        5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill-rule="nonzero" /></svg>

                                                :

                                                <svg clip-rule="evenodd" width="20" height="20" fill-rule="evenodd" fill="rgba(0, 0, 0, 0.5)" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill-rule="nonzero" /></svg>
                                            }
                                            <p className={!dark ? "looksCss" : "looksCss-active"}>{vacant.looks}</p>
                                        </div>
                                        <div>
                                            <p className={!dark ? "releasedate" : "releasedate-active"}>{vacant.releaseDate}</p>
                                        </div>
                                        <div className="heart-icon" onClick={() => getHeart(vacant.id)}>
                                            {hearts[vacant.id] ? (

                                                <box-icon onClick={() => releaseFavorite(vacant.id)} type='solid' color="rgb(255, 134, 134)" name='heart'></box-icon>
                                            ) : (
                                                <img onClick={() => addToFavorites(vacant)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAY5JREFUSEvllitTA1EMhU9MMaBQoFCg+P+/AlWHqqKGKhQ1YU7nZsnevY/cLkOZYU3N2XzJyaMruNAjF+Li74NVdSMix55DUV21YlW9AXALgL+bBCT4E8DOkojq8oSLYFW9B3DXqW6fEmJyrYe699ytBbgAPQD4SJFZvXfAA013BeAaAH/Nqb2IvHnxDJxse0wCwiZL7SX2EMCTC0odA1tyJ2mK9eB0W191Dn5OwqOIbFv+qSqDQkR2NV2W5CzmBE4igvksrOlNcwPu52Wq2oPZO7P5NbduBdjHZes4C98HRFU5nSf7AMz6cS409ZozYU4Wwb9R8eRkbbh+ssdsH4viIL6YeznYD8JqeLaeB78BpQNiK8Xkpp6M9jmDLtazBKYtfvGH4RmUOS+2pHWrOeV28sLwCHS2TrmV6WYPwaPQJjjtIIctBB+BdsFR+Cg0BO7Bz4GGwTU4AH6R2H0vTm9tDYc+9goD5+MO/bEMgSuVD1VaPJnR65RVPlTpKrC9HP2ULRU0bHXUlZ7u/4G/AOAT4B+fTCcjAAAAAElFTkSuQmCC" />
                                            )}
                                        </div>
                                    </div>
                                    <p className="premium1">{vacant.variety}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            )
        }
    }
}