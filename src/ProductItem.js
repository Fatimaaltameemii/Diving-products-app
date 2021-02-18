import "./styles.css";
import products from "./Products";
function ProductsItem(props) {
  const product = props.proditm;
  return (
    <div>
      <h4>{product.name}</h4>
      <img alt={product.alt} src={product.image} />
      <h5>{product.price} KWD </h5>
    </div>
  );
}
export default ProductsItem;
