
// SLIDERS

window.onload = function ()
{

    for (var dvs = document.getElementById ('men').children, j = 0, J = dvs.length; j < J; j++)
        with (dvs [j].style) position = 'absolute', left = 410 * j + 'px';
    for (var dvs = document.getElementById ('women').children, j = 0, J = dvs.length; j < J; j++)
        with (dvs [j].style) position = 'absolute', left = 410 * j + 'px'; //400px bylo
    for (var dvs = document.getElementById ('children').children, j = 0, J = dvs.length; j < J; j++)
        with (dvs [j].style) position = 'absolute', left = 410 * j + 'px';
}


var cnst = 1;
var spd  = 70;

function SliderFunc (dir,id)
{
    var sel;
    if(id == 0) sel = 'men';
    if(id == 1)  sel = 'women';
    var Ext = document.getElementById ('women');
    if (Ext.className) return;
    if (!Ext.className)
    {
        Ext.className = 'p' + dir;
        var dvs = Ext.children, J = dvs.length;
        if (dir > 0)
        {
            for (var j = 0; j < cnst; j++)
            {var Z = dvs [J - 1].cloneNode (1); Ext.removeChild (dvs [J - 1]), Ext.insertBefore (Z, dvs [0])}
            for (var j = 0; j < J; j++) dvs [j].style.left = 400 * (j - cnst) + 'px';
        }
        var TMR = setInterval (function ()
        {
            var P = parseInt (Ext.className.substr (1)); for (var j = 0; j < J; j++)
            dvs [j].style.left = (parseInt (dvs [j].style.left) + ((!P) ? -5 : 5)) + 'px';
            if (!parseInt (dvs [P ? 0 : cnst].style.left))
            {
                clearInterval (TMR); Ext.className = ''; if (!P) for (var j = 0; j < cnst; j++)
            {var Z = dvs [0].cloneNode (1); Ext.removeChild (dvs [0]), Ext.appendChild (Z)}
                for (var j = 0; j < J; j++) dvs [j].style.left = 410 * j + 'px';
            }
        }, 1000 / spd);
    }
}

function SliderFuncM (dir,id)
{
    var sel;
    if(id == 0) sel = 'men';
    if(id== 1)  sel = 'women';
    var Ext = document.getElementById (sel); if (Ext.className) return; if (!Ext.className)
{
    Ext.className = 'p' + dir; var dvs = Ext.children, J = dvs.length; if (dir > 0)
{
    for (var j = 0; j < cnst; j++)
    {var Z = dvs [J - 1].cloneNode (1); Ext.removeChild (dvs [J - 1]), Ext.insertBefore (Z, dvs [0])}
    for (var j = 0; j < J; j++) dvs [j].style.left = 400 * (j - cnst) + 'px';
}
    var TMR = setInterval (function ()
    {
        var P = parseInt (Ext.className.substr (1)); for (var j = 0; j < J; j++)
        dvs [j].style.left = (parseInt (dvs [j].style.left) + ((!P) ? -5 : 5)) + 'px';
        if (!parseInt (dvs [P ? 0 : cnst].style.left))
        {
            clearInterval (TMR); Ext.className = ''; if (!P) for (var j = 0; j < cnst; j++)
        {var Z = dvs [0].cloneNode (1); Ext.removeChild (dvs [0]), Ext.appendChild (Z)}
            for (var j = 0; j < J; j++) dvs [j].style.left = 410 * j + 'px';
        }
    }, 1000 / spd);
}
}

function SliderFuncC (dir)
{

    var Ext = document.getElementById ('children'); if (Ext.className) return; if (!Ext.className)
{
    Ext.className = 'p' + dir; var dvs = Ext.children, J = dvs.length; if (dir > 0)
{
    for (var j = 0; j < cnst; j++)
    {var Z = dvs [J - 1].cloneNode (1); Ext.removeChild (dvs [J - 1]), Ext.insertBefore (Z, dvs [0])}
    for (var j = 0; j < J; j++) dvs [j].style.left = 400 * (j - cnst) + 'px';
}
    var TMR = setInterval (function ()
    {
        var P = parseInt (Ext.className.substr (1)); for (var j = 0; j < J; j++)
        dvs [j].style.left = (parseInt (dvs [j].style.left) + ((!P) ? -5 : 5)) + 'px';
        if (!parseInt (dvs [P ? 0 : cnst].style.left))
        {
            clearInterval (TMR); Ext.className = ''; if (!P) for (var j = 0; j < cnst; j++)
        {var Z = dvs [0].cloneNode (1); Ext.removeChild (dvs [0]), Ext.appendChild (Z)}
            for (var j = 0; j < J; j++) dvs [j].style.left = 410 * j + 'px';
        }
    }, 1000 / spd);
}
}



// SHOP CART

function AddToCart(e)
{


    var parentBox = e.parentNode;
    var itemId = e.getAttribute('data-id'); // ID товара
    var itemTitle = parentBox.querySelector('.item-title').innerHTML;

    var newItem = {
        id: itemId,
        title: itemTitle,
        quantity: 1
    };

    var cart = null;

    var z = 0;

    if(localStorage.hasOwnProperty('cart-box')) {

        cart = JSON.parse(localStorage.getItem('cart-box'));

        localStorage.removeItem('cart-box');

        for (var i = 0; i < cart.length; i++) {

            if (cart[i].id == e.getAttribute('data-id')) {
                cart[i].quantity += 1;
                z = 1;

            }
        }

        if (z == 0) {

            cart[cart.length] = newItem;
        }

        localStorage.setItem('cart-box', JSON.stringify(cart));
        showCart();
    }
    else {

        cart = [];
        cart[0] = newItem;
        localStorage.setItem('cart-box', JSON.stringify(cart));
        showCart();
    }

}


function showCart()
{

    if(localStorage.hasOwnProperty('cart-box'))
    {
        var cart = JSON.parse(localStorage.getItem('cart-box'));
        var mainbox = document.getElementById('show-cart-main');
        var box = "<table class='shopping_list'><tr><th>Product name&nbsp;&nbsp;&nbsp;" +
            "</th><th>QTY</th>" +
            "<th>Price</th><th>SUMMA&nbsp;</th></tr>";
        var sum = 0;

        for (var i = 0; i < cart.length; i++)
        {

            var parentBox =  document.getElementById(cart[i].id);
            if(parentBox !== null)
            var itemPrice =  parentBox.querySelector('.item-price').innerHTML;
            var mathPrice = itemPrice.split(',')[0];
            sum += cart[i].quantity * mathPrice;

            box += "<tr>" + "<td>" + cart[i].title + "</td>"+
                "<td>" +"<input onchange='OnChange(this)' data-id='"+ cart[i].id +"'' style='margin: 0px; text-align: center' type='number' size='2' min='1' max='50' step='1' value = '" + cart[i].quantity +"'>" + "</td>" +
                "<td>" + itemPrice + "</td>" +
                "<td>" + mathPrice * cart[i].quantity+"€"+"</td>" +
                "<td><button onclick='Remove(this)' data-id='"+ cart[i].id +"'>&times;</button></td>"+"</tr>";
        }

        mainbox.innerHTML = box + "<tr><td>&nbsp</td><td>&nbsp</td>&nbsp<td style='font-weight: bold;'>Total:</td>" +
            "<td style='font-weight: bold;'>"+ sum + '€'+"</td></tr></table>";
        modal.style.display = "block";
    }

    modal.style.display = "block";
}


function Clear() {
    localStorage.removeItem('cart-box');
    var mainbox = document.getElementById('show-cart-main');
    mainbox.innerHTML = "<h1>The cart is emty!</h1>";
}


function Remove(e) {
    var itemId = e.getAttribute('data-id');
    var cart = JSON.parse(localStorage.getItem('cart-box'));
    var numberToRemove;

    for (var i = 0; i < cart.length; i++)
    {
        if(cart[i].id == itemId){

            numberToRemove = i;

        }
    }

    cart.splice(numberToRemove,1);
    localStorage.setItem('cart-box', JSON.stringify(cart));
    showCart();
}



function OnChange(e) {
    var itemId = e.getAttribute('data-id');

    if(e.value == 0){
        Remove(e);
    }
    else {
        var cart = JSON.parse(localStorage.getItem('cart-box'));

        for (var i = 0; i < cart.length; i++) {
            if (cart[i].id == itemId) {

                cart[i].quantity = parseInt(e.value);
            }
        }

        localStorage.setItem('cart-box', JSON.stringify(cart));
        showCart();
    }
}



// CHECKBOX SCRIPTS
function ShowAll() {

    var elem = document.getElementById('section-children');
    elem.style.display = 'block';
    var checkbox = document.getElementById('children-check');
    if(cCheck == 1) {
        checkbox.click();
    }
    checkbox.removeAttribute('checked');

    var elem2 = document.getElementById('section-men');
    elem2.style.display = 'block';

    var checkbox2 = document.getElementById('men-check');
    if(mCheck == 1) {
        checkbox2.click();
    }
    checkbox2.removeAttribute('checked');


    var elem3 = document.getElementById('section-women');
    elem3.style.display = 'block';
    var checkbox3 = document.getElementById('women-check');
    if(wCheck == 1) {
        checkbox3.click();
    }
    checkbox3.removeAttribute('checked');

}

var mCheck = 0;
var wCheck = 0;
var cCheck = 1;

function onMenCheck() {
    if(mCheck==0){
        var box = document.getElementById('men-check');

        box.removeAttribute("hidden");
        box.setAttribute("hidden","");
        box.setAttribute("checked","");
        document.getElementById('section-men').style.display = 'none';
        mCheck=1;
    }else{
        document.getElementById('section-men').style.display = 'block';
        mCheck = 0;
    }

}

function onWomenCheck() {
    if(wCheck==0){
        var box = document.getElementById('women-check');

        box.removeAttribute("hidden");
        box.setAttribute("hidden","");
        box.setAttribute("checked","");
        document.getElementById('section-women').style.display = 'none';
        wCheck=1;
    }else{
        document.getElementById('section-women').style.display = 'block';
        wCheck = 0;
    }

}


function onChildrenCheck() {
    if(cCheck==0){
        var box = document.getElementById('children-check');

        box.removeAttribute("hidden");
        box.setAttribute("hidden","");
        box.setAttribute("checked","");
        document.getElementById('section-children').style.display = 'none';
        cCheck=1;
    }else{
        document.getElementById('section-children').style.display = 'block';
        cCheck = 0;
    }

}
