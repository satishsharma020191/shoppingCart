import React from "react";
import "../style/common/grid.scss";
import "../style/common/style.scss";
import "../style/plp.scss";
import Header from './header';
import Footer from './footer';

import kiwiImg from "../static/images/products/fruit-n-veg/kiwi-green.jpg";



function Plp(props) {
  return <div className="container"><Header/>

<section class="section-plp">
        <div class="row">
            <div class="col span-2-of-10 sidebar">
                <ul>
                    <li>Fruits & Vegitables</li>
                    <li>Backery Cakes and Dairy</li>
                    <li>Beverages</li>
                    <li>Beauty and Hygiene</li>
                    <li>Baby Care</li>
                </ul>
            </div>


            <div class="col span-8-of-10 products">
                <section class="section-products">
                    <div class="row">
                        <div class="col span-1-of-4 item">
                            <h3>Fresh Kiwi- Green, 3 pcs</h3>
                            <img src={kiwiImg}/>
                            <p>
                                Kiwis are oval shaped with a brownish outer skin. the flesh is bright green and juicy with tiny edible black seeds.
                            </p>

                            <div class="price-tag">
                                    MRP Rs. 87 <a href="#">Buy Now</a>
                            </div>
                        </div>
        
                        <div class="col span-1-of-4 item">
                                <h3>Fresh Kiwi- Green, 3 pcs</h3>
                                <img src={kiwiImg}/>
                                <p>
                                    Kiwis are oval shaped with a brownish outer skin. the flesh is bright green and juicy with tiny edible black seeds.
                                </p>
    
                                <div class="price-tag">
                                        MRP Rs. 87 <a href="#">Buy Now</a>
                                </div>
                        </div>
        
                        <div class="col span-1-of-4 item">
                                <h3>Fresh Kiwi- Green, 3 pcs</h3>
                                <img src={kiwiImg}/>
                                <p>
                                    Kiwis are oval shaped with a brownish outer skin. the flesh is bright green and juicy with tiny edible black seeds.
                                </p>
    
                                <div class="price-tag">
                                    MRP Rs. 87 <a href="#">Buy Now</a>
                                </div>
                        </div>
        
                        <div class="col span-1-of-4 item">
                                <h3>Fresh Kiwi- Green, 3 pcs</h3>
                                <img src={kiwiImg}/>
                                <p>
                                    Kiwis are oval shaped with a brownish outer skin. the flesh is bright green and juicy with tiny edible black seeds.
                                </p>
    
                                <div class="price-tag">
                                 MRP Rs. 87 <a href="#">Buy Now</a>
                                </div>
                        </div>
                    </div>
                </section>
            </div>


            
        </div>
    </section>

<Footer/>
</div>;
}

export default Plp;