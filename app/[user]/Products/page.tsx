import ProductHeader from "@/components/products/ProductHeader"
import ProductList from "@/components/products/ProductList"
import { products } from "@/constants/Products"
const Products = () => {
  return (
    <>
      <ProductHeader itemsCount={products.length}/>
      <ProductList products={products} />
    </>
  )
}

export default Products