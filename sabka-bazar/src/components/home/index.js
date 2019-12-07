import React, { useEffect } from "react";
import "./home.scss";
import Layout from '../layout';
import { Link } from 'react-router-dom';
import Carousel from '../carousel';
function Home(props) {
    const { banners, categories, cartProducts } = props;

    useEffect(() => {
        props.requestBannerData();
        props.requestCategoriesData();
    }, []);

    function plusProduct(product) {
        props.requestAddProduct(product);
    }

    function minusProduct(product) {
        props.requestMinusProduct(product);
    }

    return <Layout cartProducts={cartProducts} plusProduct={plusProduct} minusProduct={minusProduct}>
        <section id="main">
            <div className="row home-tile clearfix">
                <Carousel banners={banners} />
            </div>
        </section>

        <section className="categories">
            {categories && categories.map((obj, i) => {
                return [
                    i % 2 === 0 ?
                        <div key={obj.id} className="row home-tile clearfix">
                            <div className="col span-1-of-2">
                                <figure className="left-image">
                                    <img src={obj.imageUrl} alt="fruit basket" />
                                </figure>
                            </div>
                            <div className="col span-1-of-2 title-text">
                                <h2>{obj.name}</h2>
                                <p>{obj.description}</p>
                                <Link to={`/plp/${obj.key}`} className="btn-tile">Explore {obj.key}</Link>
                            </div>
                        </div>
                        : <div key={obj.id} className="row home-tile">

                            <div className="col span-1-of-2 title-text">
                                <h2>{obj.name}</h2>
                                <p>{obj.description}</p>
                                <Link to={`/plp/${obj.key}`} className="btn-tile">Explore {obj.key}</Link>
                            </div>

                            <div className="col span-1-of-2">
                                <figure className="left-image">
                                    <img src={obj.imageUrl} alt="fruit basket" />
                                </figure>
                            </div>
                        </div>
                ]
            })

            }

        </section>

    </Layout>;
}

export default Home;