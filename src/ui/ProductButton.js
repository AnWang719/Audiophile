// import Button from "react-bootstrap/Button";

function ProductButton({ className, children }) {
  return (
    <a className={className} href="#">
      {children}
    </a>
  );
}

export default ProductButton;
