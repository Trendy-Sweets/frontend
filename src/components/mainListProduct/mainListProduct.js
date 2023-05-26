import MainListItem from "../mainListItem/mainListItem";
import MainListItemMin from "../mainListItemMin/mainListItemMin";
function MainListProduct({products}) {
  let num=0;
  return (
    <>
    <div className="main__list-product">
      <div className="main__container-list">
       {products?
        products.map(product=>{
            const {productId,productgroupName,productgorupMinPrice,products,productgroupMaxTime} = product;
            return(
                <MainListItem key={productId} productId={productId} productgroupName={productgroupName} productgorupMinPrice={productgorupMinPrice} products={products} productgroupMaxTime={productgroupMaxTime}  />
            )
        }):'loding...'
        
       }
       
      </div>
    </div>
    <div class="main__list-product-min">
                <div class="main__container-list-min">
                 
                {products?
        products.map(product=>{
            const {productId,productgroupName,productgorupMinPrice,products,productgroupMaxTime} = product;
            return(
                <MainListItemMin key={productId} productId={productId} productgroupName={productgroupName} productgorupMinPrice={productgorupMinPrice} products={products} productgroupMaxTime={productgroupMaxTime}  />
            )
        }):'loding...'
    
       }
                </div>
            </div>
</>
  );
}

export default MainListProduct;
