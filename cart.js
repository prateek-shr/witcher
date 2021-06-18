$(document).ready(function(){
    let cartItems = localStorage.getItem("items");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container");
    let total=0;
    for(var i=0; i<cartItems.length; i++)
    {
        total+=parseInt(cartItems[i].price);
    }
    if(cartItems && productContainer){
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML+= `
            <div class="col-sm-12">
            <!-- Cart Item -->
                <div class="row border-top py-3 mt-3">
                    <div class="col-sm-5">
                        <img src="./assets/d${item.id}.jpg" style="height:120px;" alt="cart1" class="img-fixed my-3">
                    </div>
                    <div class="col-sm-5 mt-4">
                        <h5 class="font-baloo font-size-20">${item.name}</h5>
                        <!-- Product Rating -->
                        <div class="d-flex">
                            <div class="rating text-warning font-size-14">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="far fa-star"></i></span>
                            </div>
                            <a href="#" class="px-2 font-rale font-size-14">20,534 ratings</a>
                        </div>
                        <!-- Product Rating -->

                        <!-- Product Quantity -->
                            <div class="qty d-flex pt-2">
                                <button type="submit" data-id="${item.id}" class="btn font-baloo text-danger px-5 bx-5 border" onclick=Delete(this);>Delete</button>
                            </div>
                        <!-- Product Quantity -->
                    </div>
                    <div class="col-sm-2 text-right mt-3">
                        <div class="font-size-20 text-danger font-baloo">
                            $<span class="product_price">${item.price}</span>
                        </div>
                    </div>
                </div>
            <!-- Cart Item -->

        </div>
            `
        });

        productContainer.innerHTML+=`
        <!-- Subtotal Section -->
        <div class="col-sm-12">
            <div class="sub-total text-center mt-2">
                <h6 class="font-size-12 font-rale text-success py-3 border"><i class="fas fa-check"></i> Your order has FREE Delivery.</h6>
                <div class="border-top py-4">
                    <h5 class="font-baloo font-size-20">Subtotal (${cartItems.length} items) <span class="text-danger">$<span class="text-danger" id="deal-price">${total}</span></h5>
                    <button type="submit" class="btn btn-warning mt-3" onclick=Purchase();>Proceed To Purchase</button>
                </div>
            </div>
        </div>
        <!-- Subtotal Section -->
        `

    }

});

function Purchase(){
    alert("Thanks for the purchase :)");
  }