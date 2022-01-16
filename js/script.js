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

    //collecting user input

    let pizzaType = $("select#type").val()
    let pizzaSize = $("select#size").val()
    let pizzaToppings = $("select#toppings").val()
    let pizzaCrust = $("select#crust").val()
    let pizzaPieces = $("input#numbers").val()
    let inhouse = $("input#inhouse").value


    

})