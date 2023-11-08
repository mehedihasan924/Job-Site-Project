import { getShoppingCart} from "../utilities/fakedb";



const CartProductloader = async () => {
    const loadedProducts = await fetch('http://localhost:3000/jobsDetails');
    const products = await loadedProducts.json();
 
  
    // if cart data is in database, you have to use async await
const storedCart = getShoppingCart();
    //  console.log(storedCart)
    const savedCart = [];

    for (const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }   

// return products

 return savedCart;
}

export default CartProductloader;
