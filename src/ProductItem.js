import "./styles.css";

function ProductsItem(props) {
  const product = props.proditm;
  return (
    <div className="productstyle">
      <h4>{product.name}</h4>
      <img className="imgesize" alt={product.alt} src={product.image} />
      <h5>{product.price} KWD </h5>
    </div>
  );
}
export default ProductsItem;
