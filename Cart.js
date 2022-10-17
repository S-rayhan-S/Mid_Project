let counter=0;
let price=0;
let shiping=0;
let tPrice=0;
function Addtocart(Value)
{
    counter++;
    document.getElementById('Totall_Product').innerText=counter;
    price+=Value;
    document.getElementById('Price').innerText= price;
    document.getElementById('Delivary').innerText= 100;
    document.getElementById('Shipping').innerText= 100;
    if(price<500)
    {
        document.getElementById('Delivary').innerText=0;
        document.getElementById('Shipping').innerText=0;
        shiping=0;
    }
    else if(price<800)
    {
        document.getElementById('Delivary').innerText=100;
        document.getElementById('Shipping').innerText=100;
        shiping=100;
    }
    else if(price<1000)
    {
        document.getElementById('Delivary').innerText=150;
        document.getElementById('Shipping').innerText=150;
        shiping=150;
    }
    else
    {
        document.getElementById('Delivary').innerText=200;
        document.getElementById('Shipping').innerText=200;
        shiping=200;
    }
    document.getElementById('Totall_Price').innerText= price+shiping;
    let TAX=price*0.16;
    let TllPrice=100+price+TAX;
    document.getElementById('Tax').innerText= TAX;
    document.getElementById('Price_with_tax').innerText= TllPrice;
    tPrice=TllPrice;

    
}

function Clearcart()
{
    alert('Thakyou \n totall Bill:'+tPrice);
    document.getElementById('Totall_Product').innerText=0;
    price=0;
    document.getElementById('Price').innerText= price;
    document.getElementById('Delivary').innerText= 0;
    document.getElementById('Shipping').innerText= 0;
    document.getElementById('Totall_Price').innerText= 0;
    let TAX=0;
    let TllPrice=0;
    document.getElementById('Tax').innerText= 0;
    document.getElementById('Price_with_tax').innerText=0;

}