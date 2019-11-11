export const fetchBannerData = async() => {
    try {
    const response = await fetch('http://localhost:5000/banners');
    const data = await response.json();   
    return data;
    } catch (e){
    console.log(e);
    }
}


export const fetchCategoriesData = async() => {
    try {
    const response = await fetch('http://localhost:5000/categories');
    const data = await response.json();   
    return data;
    } catch (e){
    console.log(e);
    }
}