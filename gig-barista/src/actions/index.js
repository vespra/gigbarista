export const selectCoffee = (coffee) => {
  console.log("You have selected on coffee: " + coffee.name);
  return {
    type: "COFFEE_SELECTED",
    payload: coffee
  }
};
