
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

    let pizza1 = new Pizza(pizzaType,pizzaSize,pizzaToppings,pizzaCrust)

    let Size1 = pizza1.size,
    originalPrice = Prices[Size1],
    deliveryCost = 500,
    crustCost = originalPrice * 0.4,
    toppingCost = originalPrice * 0.2;
    let totalCost = originalPrice + toppingCost + crustCost;




    function Service(){
        if($("inHouse").is("checked",false)){
          document.getElementById("formOutPut").innerHTML = `your Order will be ready in 20 minutes.Total cost is Ksh.${totalCost}`
        } else {
          let totalCost = originalPrice + toppingCost + crustCost + deliveryCost;
          let dropOff = prompt("Enter DropOff location")
          document.getElementById("formOutPut").innerHTML = `Your Delivery will be arriving is 20 minutes at ${dropOff}.Total cost Ksh.${totalCost}`
        }
    }

    Service();
  })
})