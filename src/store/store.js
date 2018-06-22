import { createStore } from "redux";
import { city } from "../reducers/city";
const initialState = {
  city: "Buenos Aires, ar",
  cities: [
    "Buenos aires, ar",
    "Caracas, ve",
    "Bogota, co",
    "Santiago, cl",
    "Washington",
    "Barcelona"
  ]
};

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(city, initialState, composeEnhancers);
