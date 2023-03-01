let cart_toggle=document.getElementById('home-cart');
let menu_btn=document.getElementById('cart-btn');
let list=document.getElementById('list-min');
let list_btn=document.getElementById('list-btn');
let search_btn=document.getElementById('search-btn')
let search=document.getElementById('search')

var x=0;
menu_btn.onclick=function(){
    if(x==0){
       cart_toggle.style.display='inline';
       x=1;
    }else {
        cart_toggle.style.display='none';
        x=0;
    }
}
var y=0;
list_btn.onclick=function(){
        if(y==0){
            list.style.display='inline';
            y=1;
        }else{
            list.style.display='none';
            y=0;
        }
}
var z=0;
search_btn.onclick=function(){
      
    if(z==0){
        search.style.display='inline'
        z=1;
    }else{
        search.style.display='none'
        z=0;
    }

}