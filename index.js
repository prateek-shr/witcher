$(window).on("load",function(){
  
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoPlay: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    //isotope filter
    var $grid = $(".grid").isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows'
    });

    //filter items on button click
    $(".button-group").on("click","button",function(){
        var filterValue=$(this).attr("data-filter");
        $grid.isotope({filter:filterValue});
    });


    // adding data to local storage
    const attToCartBtn = document.getElementsByClassName('attToCart');
    console.log(attToCartBtn);
    let items = [];
    for(let i=0; i<attToCartBtn.length; i++){
        attToCartBtn[i].addEventListener("click",function(e){
            console.log(e.target.parentElement.children[2].children[0].textContent);
            let item = {
                id:i+1,
                name:e.target.parentElement.children[0].textContent,
                price:e.target.parentElement.children[2].children[0].textContent,
                no:1
            };
            if(JSON.parse(localStorage.getItem('items'))===null){
                items.push(item);
                localStorage.setItem("items",JSON.stringify(items));
                window.location.reload();
            }
            else
            {
                const localItems = JSON.parse(localStorage.getItem("items"));
                localItems.map(data=>{
                    if(item.id == data.id){
                        alert("This item is available in the cart :)")
                    }
                    else {
                        items.push(data);
                    }
                });
                items.push(item);
                localStorage.setItem('items',JSON.stringify(items));
                window.location.reload();
            }
        });
    }

    //Adding data to shopping cart
    let citems = document.querySelector(".citems");
    let no=0;
    JSON.parse(localStorage.getItem('items')).map(data=>{
        no=no+data.no;
    });
    citems.innerHTML=no;
});

function Purchase(){
    alert("Thanks for the purchase :)");
  }