var sellingPrice = 199;
var listingPrice = 799;

 var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100

 console.log("Discount percentage is:" + discountPercent);
 displayDiscountPercent = Math.round(discountPercent);
 console.log(displayDiscountPercent + "% off");

 var result = listingPrice > sellingPrice;

  console.log( typeof result); //whc type of data shows

  //operator precendence website documentation link this countain operator precedence
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 



