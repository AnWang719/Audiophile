function ProductButton({ className, children }) {
  return (
    <a className={className} href="#">
      {children}
    </a>
  );
}

export default ProductButton;
