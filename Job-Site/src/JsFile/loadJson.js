const Dataloader = async () => {

    const loadedProducts = await fetch('../public/jobItems.json');
    const Products = await loadedProducts.json()
    console.log(Products)
  
    return Products
  }
  export default Dataloader
 