//This is the function used to calculate the average price.
function Average(thePrice)
{
    var total = 0;
    for(var i = 0; i < thePrice.length; i++ )
    {
        total += parseInt(thePrice[i]);
    }
    return total/(thePrice.length-1);
}
//This is the function to remove the stock
function theInputBought()
{
    //Getting the number of items sold
    var theValue = +document.getElementById("theItems").value;
    //Getting the selected product being sold
    var theID = document.getElementById("Products").value;
    //Getting the email of the buyer
    var buyerEmail = document.getElementById("buyerMail").value;

{//These are to make sure that the input and select fields are not empty.
//The alert message will inform the user if a field is empty and the 
//e.preventDefault is to make sure no other action is taken
    if(buyerEmail == "")
    {
        alert("Please enter your email address");
        e.preventDefault;
    }
    if("Select".localeCompare(theID) == 0)
    {
        alert("Please select the product you adding.");
        e.preventDefault;
    }
    if(theValue <= 0)
    {
        alert("The items bought input can't be empty or negative");
        e.preventDefault;
    }
}
//
{
//Since we need to store the emails already used, we use the local storage.
//defArr is to define the array that we will store in the local storage for when it is still
//empty and we put in null 
    var defArr = new Array();
    if(JSON.parse(localStorage.getItem('theEmails') == null))
    {
        defArr.push(null);
        localStorage.setItem('theEmails', JSON.stringify(defArr));
    }
//Since we will be using isEmail all the time we don't want to define it as a new array 
//every time the function is used, so since the array defArr is already in the local storage
//is email will be an array and we will push the first email when the local storage is already
//empty, then will put the array with now the buyer's email in the local storage.  
    var isEmail = JSON.parse(localStorage.getItem('theEmails'));
    if(isEmail == null)
    {
        isEmail.push(buyerEmail);
        localStorage.setItem('theEmails', JSON.stringify(isEmail));
    }
//We first check if the email of the buyer is in the array in the local storage. If it give in 
// an index, which will be >= 0 then we know that the email exists in the array, and therefore
//it was already used, and the alert message informs the user and e.preventDefault makes sure
//no other action is taken
    if(isEmail.indexOf(buyerEmail) >= 0)
    {
        alert(buyerEmail + " has already done a purchase and you can only buy once")
        e.preventDefault;
    }
//When we find that the index of the buyer's email is < 0, this means that the buyer's email
//was not found in the stored emails. We than push it into the email array and put the 
//array into the local storage. 
    if(isEmail.indexOf(buyerEmail) < 0)
    {
        isEmail.push(buyerEmail);
        localStorage.setItem('theEmails', JSON.stringify(isEmail));
    }
}
//We compare to find which product was selected
    if("PRODUCT01".localeCompare(theID) == 0)
    {
//After finding which product is being bought, we than check if the product is still available. 
        let prod01 = +localStorage.getItem('Product01');
        prod01 -= theValue;
        if (prod01 < 0)
        {
        //If when we minus the product's qty with the amount being bought we find that it's < 0
        //we check if the product was out of stock in the first place.
            if ((prod01+theValue) <= 0 )
            {
            //If so, we than inform the user that we are out of stock.  
            //Since the email is already added, we take it out, since we did
            //not have anymore product left.
                var isEmail = JSON.parse(localStorage.getItem('theEmails'));
                isEmail.pop();
                localStorage.setItem('theEmails', JSON.stringify(isEmail));
                prod01 = 0;
                alert("We are currently out of stock for PRODUCT01")
            }
            else
            {
            //if the user just bought too much product than we currently had
            //we give them what was left of the product and we than left with nothing.
                alert("We only have " + (prod01+theValue) + " items left for PRODUCT01")
                prod01 = 0;
                localStorage.setItem('Product01', prod01);
                window.alert((prod01+theValue) + " Item bought by " + buyerEmail + " of PRODUCT01 and the total is " + prod01 );
            }
        }
        else
        {
        //if the user is buying product within our available qty, we just give it to them.
            localStorage.setItem('Product01', prod01);
            window.alert(theValue + " Item bought by " + buyerEmail + " of PRODUCT01 and the total is " + prod01 );
        }
    }
    //Works the same way as for product one, difference is we just do everything we
    // did for product one we do it for this product too.
    if("PRODUCT02".localeCompare(theID) == 0)
    {
        let prod02 = +localStorage.getItem('Product02');
        prod02 -= theValue;
        if (prod02 < 0)
        {
            if ((prod02+theValue) <= 0 )
            {
                var isEmail = JSON.parse(localStorage.getItem('theEmails'));
                isEmail.pop();
                localStorage.setItem('theEmails', JSON.stringify(isEmail));
                prod02 = 0;
                alert("We are currently out of stock for PRODUCT02")
            }
            else
            {
                alert("We only have " + (prod02+theValue) + " items left for PRODUCT02")
                prod02 = 0;
                localStorage.setItem('Product02', prod02);
                window.alert((prod02+theValue) + " Item bought by " + buyerEmail + " of PRODUCT01 and the total is " + prod02 );
            }
        }
        else
        { 
            localStorage.setItem('Product02', prod02);
            window.alert(theValue + " Item bought by " + buyerEmail + " of PRODUCT02 and the total is " + prod02 );
        }
    }
    //Works the same way as for product one, difference is we just do everything we
    // did for product one we do it for this product too.
    if("PRODUCT03".localeCompare(theID) == 0)
    {
        let prod03 = +localStorage.getItem('Product03');
        prod03 -= theValue;
        if (prod03 < 0)
        {
            if ((prod03+theValue) <= 0 )
            {
                var isEmail = JSON.parse(localStorage.getItem('theEmails'));
                isEmail.pop();
                localStorage.setItem('theEmails', JSON.stringify(isEmail));
                prod03 = 0;
                alert("We are currently out of stock for PRODUCT03")
            }
            else
            {
                alert("We only have " + (prod03+theValue) + " items left for PRODUCT03")
                prod01 = 0;
                localStorage.setItem('Product03', prod03);
                window.alert((prod03+theValue) + " Item bought by " + buyerEmail + " of PRODUCT03 and the total is " + prod03 );
            }
        }
        else
        { 
            localStorage.setItem('Product03', prod03);
            window.alert(theValue + " Item bought by " + buyerEmail + " of PRODUCT03 and the total is " + prod03 );
        }
    }
}
//This is the function that is used and called every time we add stock. 
function theInputStock()
{
//theValue is getting the number of products to add to stock form the user input
//itemPrice is getting the prices of the added items 
//theId gets which products are being added.
    var theValue = +document.getElementById("Items").value;
    var itemPrice = +document.getElementById("thePrice").value;
    var theID = document.getElementById("Products").value;
{
//We making sure that the select and input fields are not empty
//If any is empty the user is informed and the will be no other actions taken
//until all the input fields are filled.
        if("Select".localeCompare(theID) == 0)
        {
            alert("Please select the product you adding.");
            e.preventDefault;
        }
        if(theValue <= 0)
        {
            alert("The items received input can't be empty or negative");
            e.preventDefault;
        }
        if(itemPrice <= 0)
        {
            alert("The items price can't be empty or negative");
            e.preventDefault;
        }
}
//We use the if statement to check which product is being added.
    if("PRODUCT01".localeCompare(theID) == 0)
    {
//Since we want to always display the average price of the items, we store every price we get in
//an array. We than store the array into the local storage. Whenever the product
//is added we take the array and use the function Average() to get the average and then
//Display it to the user.
        var defArr = new Array();
        if(JSON.parse(localStorage.getItem('thePrice01') == null))
        {
            defArr.push(0);
            localStorage.setItem('thePrice01', JSON.stringify(defArr));
        }
        var isPrice = JSON.parse(localStorage.getItem('thePrice01'));
        isPrice.push(itemPrice);
        localStorage.setItem('thePrice01', JSON.stringify(isPrice));
        var price = JSON.parse(localStorage.getItem('thePrice01'));
        let prod01 = +localStorage.getItem('Product01');
        prod01 += theValue;
        localStorage.setItem('Product01', prod01);
        localStorage.setItem('Price01', Average(price));
        window.alert(theValue + " Item added on PRODUCT01 and the total is " + prod01 );
    }
    //Similar process to product one. Difference is the product.
    if("PRODUCT02".localeCompare(theID) == 0)
    {
        var defArr = new Array();
        if(JSON.parse(localStorage.getItem('thePrice02') == null))
        {
            defArr.push(0);
            localStorage.setItem('thePrice02', JSON.stringify(defArr));
        }
        var isPrice = JSON.parse(localStorage.getItem('thePrice02'));
        isPrice.push(itemPrice);
        localStorage.setItem('thePrice02', JSON.stringify(isPrice));
        var price = JSON.parse(localStorage.getItem('thePrice02'));
        let prod02 = +localStorage.getItem('Product02');
        prod02 += theValue;
        localStorage.setItem('Product02', prod02);
        localStorage.setItem('Price02', Average(price));
        window.alert(theValue + " Item added on PRODUCT02 and the total is " + prod02 );
    }
    //Similar process to product one. Difference is the product.
    if("PRODUCT03".localeCompare(theID) == 0)
    {
        var defArr = new Array();
        if(JSON.parse(localStorage.getItem('thePrice03') == null))
        {
            defArr.push(0);
            localStorage.setItem('thePrice03', JSON.stringify(defArr));
        }
        var isPrice = JSON.parse(localStorage.getItem('thePrice03'));
        isPrice.push(itemPrice);
        localStorage.setItem('thePrice03', JSON.stringify(isPrice));
        var price = JSON.parse(localStorage.getItem('thePrice03'));
        let prod03 = +localStorage.getItem('Product03');
        prod03 += theValue;
        localStorage.setItem('Product03', prod03);
        localStorage.setItem('Price03', Average(price));
        window.alert(theValue + " Item added on PRODUCT03 and the total is " + prod03);
    }
}
