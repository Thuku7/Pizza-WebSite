
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


    let pizzaType = $("select#type").val()
    let pizzaSize = $("select#size").val()
    let pizzaToppings = $("select#toppings").val()
    let pizzaCrust = $("select#crust")
    let numberzPizzas = $("input#numbers").val()
    let inHouse = $("input#inHouse")


    //prices

    let Prices = {
      large:1000,
      medium:800,
      small:500,
    }

    
  })
})