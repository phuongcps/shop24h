import React, {useEffect, useState} from 'react'
import {FilterByName,FilterByPrice,FilterByType} from "./Filter/index.js"
import styles from "../styles/app.module.css"

function Filter ({products,setProducts}) {
    const [nameFilter,setNameFilter] = useState("")
    const [priceFilter,setPriceFilter] = useState([Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY])
    const [typeFilter,setTypeFilter] = useState([])

    useEffect (() => {
        let filterProduct = [...products]

        filterProduct = filterProduct.filter(each => each.name.toLowerCase().includes(nameFilter.trim().toLowerCase()))

        filterProduct = filterProduct.filter(each => (each.price >= priceFilter[0] && each.price <= priceFilter[1]))

        setProducts(filterProduct)

    },[nameFilter,priceFilter])

    const handleResetFilter = () => {
        setNameFilter("")
        setPriceFilter([Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY])
    }

    return (
        <div className={styles.box}>
            <h2>Bộ lọc sản phẩm</h2>
            <FilterByName styles={styles} nameFilter={nameFilter} setNameFilter={setNameFilter}/>
            <FilterByPrice styles={styles} priceFilter={priceFilter} setPriceFilter={setPriceFilter}/>
            {/* <FilterByType styles={styles}/> */}
            <div className={styles.box}>
                <a style={{cursor:"pointer"}} id="reset-filter" onClick={handleResetFilter}>Reset Filter</a>
            </div>
        </div>
    )
}

export default Filter