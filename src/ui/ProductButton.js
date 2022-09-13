import Button from "react-bootstrap/Button";

function ProductButton({ className, children }) {
  return <Button className={className}>{children}</Button>;
}

export default ProductButton;
