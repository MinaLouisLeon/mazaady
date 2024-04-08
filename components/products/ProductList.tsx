import { ProductType } from "@/types";
import Product from "./Product";
const ProductList = ({products}:{
    products: ProductType[];
}) => {
    return (
        <div className=" md:m-4 rounded-[24px] md:p-4 flex flex-col gap-8">
            {products.map((product) => (
                <Product product={product} key={product.id}/>
            ))}
        </div>
    )
}

export default ProductList


