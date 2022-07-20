import React from 'react'

function FilterByName({styles,nameFilter,setNameFilter}) {
    return (
        <div className={styles.box}>
            <span className={styles.filterHeader}>
                Tên sản phẩm
            </span>
            <div className={styles.nameFilter}>
                <input type="text" value={nameFilter} onChange={e => setNameFilter(e.target.value)}/>
            </div>
        </div>
    )
}

export default FilterByName