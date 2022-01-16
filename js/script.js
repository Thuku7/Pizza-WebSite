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

      let pizzaPrices = {
        small : 500,
        medium: 700,
        Large: 1000
      }

      let deliveryCost = 350,
      
      
    })

    //collecting user input

    let pizzaType = $("select#type").val()
    let pizzaSize = $("select#size").val()
    let pizzaToppings = $("select#toppings").val()
    let pizzaCrust = $("select#crust").val()
    let pizzaPieces = $("input#numbers").val()
    let inhouse = $("input#inhouse").value


    let pizza1 = new Pizza(pizzaType,pizzaSize,pizzaToppings,pizzaCrust);
    originalPrice = pizzaPrices[pizza1.size]
    toppingPrice = originalPrice / 50;
    crustPrice = originalPrice * 2;


    totalCost = originalPrice + pizzaToppings + pizzaCrust
})