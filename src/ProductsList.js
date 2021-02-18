import products from "./Products";
import ProductsItem from "./ProductItem";

const ProductsList = () => {
  return products.map((prod) => (
    <ProductsItem proditm={prod} key={prod.name} />
  ));
};
export default ProductsList;
