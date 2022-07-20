import React,{useRef} from 'react'

function FilterByPrice ({styles,priceFilter,setPriceFilter}) {

    const priceMin = useRef();
    const priceMax = useRef();

    const handleSetPrice = () => {
      let min = !priceMin.current.value ? Number.NEGATIVE_INFINITY : Number(priceMin.current.value)
      let max = !priceMax.current.value ? Number.POSITIVE_INFINITY : Number(priceMax.current.value)

      setPriceFilter([min,max])
    }

    return (
      <div className={styles.box}>
        <span className={styles.filterHeader}>
            Giá
        </span>
        <div className={styles.priceRange}>
            <input ref={priceMin} type="number" value={priceFilter[0]} onChange={handleSetPrice}/>
            <span>-</span>
            <input ref={priceMax} type="number" value={priceFilter[1]} onChange={handleSetPrice}/>
        </div>
      </div>
    )
}

export default FilterByPrice