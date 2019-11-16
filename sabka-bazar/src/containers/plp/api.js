// export const fetchBannerData = async() => {
//     try {
//     const response = await fetch('http://localhost:5000/banners');
//     let data = await response.json(); 
//     data = data.filter((d)=>{ return d.isActive == true}).sort((a,b)=>{ return a.order - b.order}); 
//     return data;
//     } catch (e){
//     console.log(e);
//     }
// }


// export const fetchCategoriesData = async() => {
//     try {
//     const response = await fetch('http://localhost:5000/categories');
//     let data = await response.json();   
    
//     data =  data.filter((d)=> {
//         return d.enabled == true;
//     }).sort((a, b)=>{
//         return a.order - b.order
//     });
    
//     return data;
//     } catch (e){
//     console.log(e);
//     }
// }

export const fetchProductsData = async() => {
    try{
    const response = await fetch('http://localhost:5000/products');
    let data = await response.json();
    return data;        
    } catch(e){
        console.log(e);
    }
}

export const postAddtoCartData = async(data) => {
    try{
        const apiRes = await fetch('http://localhost:5000/addToCart',{
            method: 'post',
            body: data.id
          });
          let resp = await apiRes.json();   
         console.log('add to cart api called response', resp);
        return resp;
    } catch(e){
        console.log(e);
    }
}