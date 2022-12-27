//Write code here
const product = {
    productId: 101,
     productName:"Mobile",
      description:"5G,4G",
      unitPrice: 15000,
      productCategory:function(){
        return this.productId + "  " + this.productName + "  "+this.description + "  " +this.unitPrice;
      }
};
console.log(product)

  
