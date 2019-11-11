import React from "react";
import "../style/common/grid.scss";
import "../style/common/style.scss";
import "../style/plp.scss";
import Header from './header';
import Footer from './footer';

// import kiwiImg from "/static/images/products/fruit-n-veg/kiwi-green.jpg";



function Plp(props) {
    console.log('printing pip props', props);
    console.log('printing PLP props', props.match.params.cid);

    let cid = props.match.params.cid;

    





  return <div className="container"><Header/>

<section className="section-plp">
        <div className="row">
            <div className="col span-2-of-10 sidebar">
                <ul>
                    <li>Fruits & Vegitables</li>
                    <li>Backery Cakes and Dairy</li>
                    <li>Beverages</li>
                    <li>Beauty and Hygiene</li>
                    <li>Baby Care</li>
                </ul>
            </div>


            <div className="col span-8-of-10 products">
                <section className="section-products">
                    <div className="row">
                        <div className="col span-1-of-4 item">
                            <h3>Fresh Kiwi- Green, 3 pcs</h3>
                            <img src={`/static/images/products/fruit-n-veg/kiwi-green.jpg`}/>
                            <p>
                                Kiwis are oval shaped with a brownish outer skin. the flesh is bright green and juicy with tiny edible black seeds.
                            </p>

                            <div className="price-tag">
                                    MRP Rs. 87 <a href="#">Buy Now</a>
                            </div>
                        </div>
        
                        <div className="col span-1-of-4 item">
                                <h3>Fresh Kiwi- Green, 3 pcs</h3>
                                <img src={`/static/images/products/fruit-n-veg/kiwi-green.jpg`}/>
                                <p>
                                    Kiwis are oval shaped with a brownish outer skin. the flesh is bright green and juicy with tiny edible black seeds.
                                </p>
    
                                <div className="price-tag">
                                        MRP Rs. 87 <a href="#">Buy Now</a>
                                </div>
                        </div>
        
                        <div className="col span-1-of-4 item">
                                <h3>Fresh Kiwi- Green, 3 pcs</h3>
                                <img src={`/static/images/products/fruit-n-veg/kiwi-green.jpg`}/>
                                <p>
                                    Kiwis are oval shaped with a brownish outer skin. the flesh is bright green and juicy with tiny edible black seeds.
                                </p>
    
                                <div className="price-tag">
                                    MRP Rs. 87 <a href="#">Buy Now</a>
                                </div>
                        </div>
        
                        <div className="col span-1-of-4 item">
                                <h3>Fresh Kiwi- Green, 3 pcs</h3>
                                <img src={`/static/images/products/fruit-n-veg/kiwi-green.jpg`}/>
                                <p>
                                    Kiwis are oval shaped with a brownish outer skin. the flesh is bright green and juicy with tiny edible black seeds.
                                </p>
    
                                <div className="price-tag">
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