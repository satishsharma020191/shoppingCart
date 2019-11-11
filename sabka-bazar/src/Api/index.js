export const fetchBannerData = async() => {
    try {
    const response = await fetch('http://localhost:5000/banners');
    let data = await response.json(); 
   data = data.filter((d)=>{ return d.isActive == true}).sort((a,b)=>{ return a.order - b.order}); 
    return data;
    } catch (e){
    console.log(e);
    }
}


export const fetchCategoriesData = async() => {
    try {
    const response = await fetch('http://localhost:5000/categories');
    let data = await response.json();   
    console.log('data before filter', data);
    data =  data.filter((d)=> {
        return d.enabled == true;
    }).sort((a, b)=>{
        return a.order - b.order
    });

    console.log('data after cater', data);
    // data = data.sort(function(a, b){
    //     return a.order - b.order
    // });
    
    return data;
    } catch (e){
    console.log(e);
    }
}