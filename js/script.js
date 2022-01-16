class Pizza {
 constructor(type,size,toppings,crust) {
    this.type = type,
    this.size = size,
    this.toppings = toppings,
    this.crust = crust
}
}


$(document).ready(function(){


    $("#form").submit(function(event){
      event.preventDefault()

      let PizzaPrices = {
        small : 500,
        medium: 700,
        Large: 1000
      }

      let deliveryCost = 350,
      
      
    })
})