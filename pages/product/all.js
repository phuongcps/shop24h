import React ,{useState,useRef} from 'react'
import { client } from '../../lib/client';
import { Product,Filter} from '../../components';

function AllProducts({allProducts}) {

  const [products,setProducts] = useState(allProducts)

  return (
    <div className='grid grid-cols-3 gap-4 p-8'>
      <Filter products={allProducts} setProducts={setProducts}/>
      <div className='col-span-2'>
        <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>
    </div>
  )
}

export default AllProducts

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const allProducts = await client.fetch(query);

  return {
    props: { allProducts}
  }
}