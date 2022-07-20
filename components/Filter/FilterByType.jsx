import React from 'react'

function FilterByType ({styles}) {
    return (
      <div class={styles.box}>
        <span class={styles.filterHeader}>
            Loại
        </span>
        <ul class={styles.filterList}>
            <li>
                <div class={styles.groupCheckbox}>
                    <input type="checkbox" id="filter-normal" value="-N"/>
                    <label htmlFor="filter-normal">
                        Headphone
                    </label>
                </div>
            </li>
            <li>
                <div class={styles.groupCheckbox}>
                    <input type="checkbox" id="filter-mini" value="-M"/>
                    <label htmlFor="filter-mini">
                        Earphone
                    </label>
                </div>
            </li>
        </ul>
      </div>
    )
}

export default FilterByType