import React from "react";
import "./productCard.css";
import Button from "../components/Button";

function ProductCard({products}) {
    // render() {
    //   const { img, title, price, handleAddToCart } = this.props;
  
      return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map((item, index) => (
                    <div key={index} className="col">
                        <div className="card">                            
                                <img className="card-img-top" src={item.img} alt="" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.price}€</p>
                                    <Button>Add to cart</Button>
                                </div>
                            
                        </div>
                    </div>       
                ))} 
        </div>
      );
    }
  

  export default ProductCard;