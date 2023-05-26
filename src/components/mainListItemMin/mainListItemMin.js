import imgProduct from "../../img/img-product.png";
function MainListItemMin({
  productId,
  productgroupName,
  productgorupMinPrice,
  products,
  productgroupMaxTime,
}) {
  const productColor = products.map((item) => {
    return <a className="main__item-colors" style={{ backgroundColor: item.productColor}} href="#"></a>;
  });

  return (
    <>
      <div className="main__item">
        <img className="main__img-item" src={imgProduct} alt="" />
        <h3 className="main__title-item">{productgroupName}</h3>
        <div className="main__block-item">
          <div className="main__time-item">
            <svg
              width="35"
              height="32"
              viewBox="0 0 35 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.0859375"
                y="0.126221"
                width="34.1703"
                height="31.2722"
                fill="url(#pattern0)"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use transform="matrix(0.00178748 0 0 0.00195312 0.0424059 0)" />
                </pattern>
                <image id="image0_538_1243" width="512" height="512" />
              </defs>
            </svg>
            <span className="main__time-do-item">
              {productgroupMaxTime} години
            </span>
          </div>
          <div className="main__colors">
            <p className="main__title-color">Колір:</p>
            <div className="main__list-colors">{productColor}</div>
          </div>
          <a className="main__full-info-item" href="#">
            Докладніше
          </a>
          <div className="main__price-item">
            <p className="main__number-price-item">{productgorupMinPrice}</p>
            <p className="main__currency-price-item">грн</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainListItemMin;
