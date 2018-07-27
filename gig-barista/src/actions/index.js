export const selectCoffee = (coffee) => {
  console.log("You have selected on coffee: " + coffee.name);
  return {
    type: "COFFEE_SELECTED",
    payload: coffee
  }
};


// update daily form
export const updateDailyForm = (coffeeLocation, coffeeStation, coffeeType, coffeeAmount) => {
  return {
    type: "UPDATE_DAILY_FORM",
    coffeeLocation,
    coffeeStation,
    coffeeType,
    coffeeAmount
  }
};

// update single coffee
export const updateCoffee = (coffee) => {
  console.log("You have updated coffee: " + coffee);
  return {
    type: "UPDATE_COFFEE",
    milkType,
    ice
  }
};

// add coffee
export const addCoffee = (coffee) => {
  console.log("You have added coffee: " + coffee);
  return {
    type: "ADD_COFFEE",
    coffee
  }
};

// delete??
