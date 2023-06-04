import imgProduct from "../../img/img-product.png";
import icomtime from '../../img/clock-time.svg';
function MainListItem({
  productId,
  productgroupName,
  productgorupMinPrice,
  products,
  productgroupMaxTime,
}) {
  const productColor = products.map((item) => {
    let a = `${window.location.origin}/product/${item.productId}`;
    return <a className="main__item-colors" style={{ backgroundColor: item.productColor}} href={a}></a>;
  });

  return (
    <>
      <div className="main__item">
        <img className="main__img-item" src={imgProduct} alt="" />
        <h3 className="main__title-item">{productgroupName}</h3>
        <div className="main__block-item">
          <div className="main__time-item">
            <img src={icomtime} alt=""/>
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

export default MainListItem;
