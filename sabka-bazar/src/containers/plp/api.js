export const fetchProductsData = async () => {
    try {
        const response = await fetch('http://localhost:5000/products');
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}

export const postAddtoCartData = async (data) => {
    try {
        const apiRes = await fetch('http://localhost:5000/addToCart', {
            method: 'post',
            body: data.id
        });
        let resp = await apiRes.json();
        return resp;
    } catch (e) {
        console.log(e);
    }
}