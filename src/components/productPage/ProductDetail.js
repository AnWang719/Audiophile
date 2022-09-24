function ProductDetail() {
  return (
    <>
      <ImgText
        src={
          isDesktop
            ? selectedProduct[0].image.desktop
            : isTablet
            ? selectedProduct[0].image.tablet
            : selectedProduct[0].image.mobile
        }
        spanExist={true}
        span={selectedProduct[0].new ? "NEW PRODUCT" : ""}
        title1={selectedProduct[0].name}
        btnExist={true}
        btnText="SEE PRODUCT"
      />
    </>
  );
}
