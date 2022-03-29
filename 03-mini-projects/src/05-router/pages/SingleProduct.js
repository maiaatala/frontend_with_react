import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  //name needs to match name given at the Route tag
  // console.log(useParams());
  const { productId } = useParams();
  // console.log(productId);

  const { image, name } = products.find((product) => product.id === productId);

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">back to products</Link>
    </section>
  );
};

export default SingleProduct;
