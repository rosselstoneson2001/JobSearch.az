import { useContext, useState, useEffect } from "react"
import { myDarkTheme } from "../../maninlayout"
import { Link } from "react-router-dom"

export default function Company() {

    const { data, setDetail, detail, hearts, categoryFilter, getFetch, currentPage, setCurrentPage, handlePageChange, getCompany, dark, getToggleRight, getSideMenu, setToggleRight } = useContext(myDarkTheme)

    const [dataCompany, setDataCompany] = useState([])
    const [lengthOfJobs, setLengthOfJobs] = useState([])
    const [companySearch, setCompanySearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:3005/companies")
            .then(res => res.json())
            .then(data => setDataCompany(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/vacancies")
            .then(res => res.json())
            .then(data => setLengthOfJobs(data))
    }, [])

    function addToRightBar(detals) {
        setToggleRight(p => !p)
        setDetail(detals)
    }



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
            <div className="elan-container">

                <div className="category-search-bar flex-1">
                    <input type="text" className={!dark ? "category-search-input" : "category-search-input-active"} placeholder="Şirkət üzrə axtarış" onChange={(e) => setCompanySearch(e.target.value)} value={companySearch} />
                    <div className="category-search-icon"> {
                        dark ?
                            <box-icon name='search-alt-2' color="rgba(255, 255, 255, 0.2)"></box-icon> :
                            <box-icon name='search-alt-2' color="rgba(0, 0, 0, 0.5)"></box-icon>
                    }
                    </div>

                </div>

                <div className="elan-container-scroll" onClick={() => handlePageChange("pageCompany")}>
                    {dataCompany.filter(vacant => {
                        return companySearch.toLowerCase() === "" ? vacant : vacant.company.toLowerCase().includes(companySearch)
                    }).map(vacant => (

                        <div key={vacant.id} className={dark ? "vacancies-none-border" : "vacancies"} onClick={() => getCompany(vacant.company)}>
                            <div className="logo-part" onClick={() => addToRightBar(vacant)}>
                                <div>
                                    <img className="imgVacant" src={vacant.image} alt="" />
                                </div>
                                <div>
                                    <h1>{vacant.company}</h1>
                                    <p className={!dark ? "company-category" : "company-category-active"}>{vacant.category}</p>
                                </div>
                            </div>
                            <p className={dark ? "category-counter" : "category-counter-active"}>{lengthOfJobs.filter(comp => comp.company == vacant.company).length} iş elanı</p>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}