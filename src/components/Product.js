import React from 'react';
import { CartContext } from '../Context';
import { useContext } from 'react'

export default function Product(props) {
  const { name , price , image}= props.value;
  const context = useContext(CartContext);
  return (
    
    <div className="col mb-5">
                <div className="card h-100">
                 
                    <img className="card-img-top" src={image} 
                    alt="..." />
                   
                    <div className="card-body p-4">
                        <div className="text-center">
                          
                            <h5 className="fw-bolder">{name}</h5>
                           
                            {price}
                        </div>
                    </div>
                    
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            
                                        <button 
                                            onClick={()=>context.addToCart(props.value)}
                                            className="btn btn-outline-dark mt-auto" 
                                        >
                                        Add to cart
                                        </button>
                               
                        </div>
                    </div>
                </div>
    </div>
                
  )      
}