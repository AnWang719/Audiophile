import { useParams } from "react-router-dom";

function ProductPage() {
  let { id } = useParams();
  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default ProductPage;
