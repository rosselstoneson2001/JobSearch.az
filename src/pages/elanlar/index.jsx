import { useContext, useState, useEffect } from "react"
import { myDarkTheme } from "../../maninlayout"
import Logo from "../../leftbar/logo";
import { Link } from "react-router-dom";

function Elan() {

    const { data, setDetail, detail, hearts, setHearts, favorites, setFavorites, categoryFilter, getFetch, currentPage, setCurrentPage, handlePageChange, getCompany, dark, toggleRight, setToggleRight, getSideMenu } = useContext(myDarkTheme)


    const [searchFilter, setSearchFilter] = useState("")



    function getHeart(vacantId) {
        setHearts((prevHearts) => ({
            ...prevHearts,
            [vacantId]: !prevHearts[vacantId]
        }));
    }

    function releaseFavorite(id) {
        setFavorites(favorites.filter(prevFavorites => prevFavorites.id !== id))
    }

    function addToFavorites(favoriteCount) {
        setFavorites([...favorites, favoriteCount])
    }

    function getToggleRight() {
        setToggleRight(true)
    }

    function addToRightBar(detals) {
        setDetail(detals)
        setToggleRight(prevToggleRight => !prevToggleRight)
    }
    console.log(toggleRight);

    return (
        <div className="max-w-[10000px] flex-1">
            <div className="responsive-logo">

                <Link to="/">
                    <h1 className="responsive-logo-h1 blue" onClick={getToggleRight}>JobSearch</h1>
                </Link>
                <div onClick={getSideMenu}>
                    <box-icon name='menu' color="rgb(187, 187, 187)"></box-icon>
                </div>
            </div>
            <div className="elan-container">


                <div className="search-bar">
                    <input type="text" className={!dark ? "search-input" : "search-input-active"} placeholder="Sayt üzrə axtarış" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} />
                    <div className="search-icon-container">
                        <div className={!dark ? "search-icon" : "search-icon-active"}>
                            {dark ?
                                <box-icon name='search' color="rgba(255, 255, 255, 0.2)"></box-icon>
                                :
                                <box-icon name='search' color="grey"></box-icon>
                            }
                        </div>
                        <div className="filter">
                            <div className="filter-image">
                                {
                                    !dark ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" style={{ fill: 'blue' }}>
                                            <path d="M13 20v-4.586L20.414 8c.375-.375.586-.884.586-1.415V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.585c0 .531.211 1.04.586 1.415L11 15.414V22l2-2z" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" style={{ fill: 'white' }}>
                                            <path d="M13 20v-4.586L20.414 8c.375-.375.586-.884.586-1.415V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.585c0 .531.211 1.04.586 1.415L11 15.414V22l2-2z" />
                                        </svg>
                                }
                            </div>
                            <p className={!dark ? "filter-word" : "filter-word-active"}>Filterler</p>
                        </div>
                    </div>
                </div>

                {categoryFilter && <div className="category-filter"><div className="category-filter-name">{categoryFilter} <button onClick={() => getFetch("all")}>x</button></div></div>}


                <div className="elan-container-scroll">
                    {data.filter(vacant => {
                        return searchFilter.toLowerCase() === "" ? vacant : vacant.title.toLowerCase().includes(searchFilter)
                    }).map(vacant => (
                        <div onClick={() => getCompany(vacant.company)} key={vacant.id}>

                            <div key={vacant.id} className={vacant.variety == "PREMIUM" ? "vacancies" : "vacancies-none-border"} onClick={() => handlePageChange("pageVacancy")}>
                                <div className="logo-part min-w-[200px]" onClick={() => addToRightBar(vacant)}>
                                    <div>
                                        <img className="imgVacant" src={vacant.image} alt="" />
                                    </div>
                                    <div>
                                        <h1>{vacant.title}</h1>
                                        <p className={!dark ? "company-title" : "company-title-active"}>{vacant.company}</p>
                                    </div>
                                </div>
                                <div className="eye-svg">
                                    <div>{dark ?
                                        <svg clip-rule="evenodd" width="20" height="20" fill-rule="evenodd" fill="rgba(255, 255, 255, 0.5)" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.
                                    5-1.12-2.5-2.5-2.5z" fill-rule="nonzero" /></svg>

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
                                            dark ?
                                                <box-icon type='solid' color="rgba(255, 255, 255, 0.3)" onClick={() => addToFavorites(vacant)} name='heart'></box-icon>
                                                :
                                                <box-icon type='solid' color="rgba(0, 0, 0, 0.5)" onClick={() => addToFavorites(vacant)} name='heart'></box-icon>
                                        )}
                                    </div>
                                </div>{
                                    dark ?
                                        <p className={vacant.variety == "PREMIUM" ? "premium1" : "yeni1"}>{vacant.variety}</p>
                                        :
                                        <p className={vacant.variety == "PREMIUM" ? "premium1" : "yeni1-active"}>{vacant.variety}</p>
                                }
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}


export default Elan

