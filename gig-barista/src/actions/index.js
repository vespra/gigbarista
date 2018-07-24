export const selectCoffee = (coffee) => {
  console.log("You have selected on coffee: " + coffee.name);
  return {
    type: "COFFEE_SELECTED",
    payload: coffee
  }
};


// update daily form
export const updateDailyForm = (dailyForm) => {
  console.log("You have submitted the daily form: " + dailyForm );
  return {
    type: "UPDATE_DAILY_FORM",
    dailyForm
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
