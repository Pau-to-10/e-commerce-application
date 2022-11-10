import React from "react";

function ProductCard({characters = []}) {
    // render() {
    //   const { img, title, price, handleAddToCart } = this.props;
  
      return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div>
                            <img src={item.image} alt="" />
                            <div className="card-boby">
                                <h5 className="card-title">{item.name}</h5>
                                {/* <p>{price}€</p>
                                <Button onClick={handleAddToCart}>Add to cart</Button> */}
                            </div>
                        </div>
                    </div>       
                ))} 
        </div>
      );
    }
  

  export default ProductCard;