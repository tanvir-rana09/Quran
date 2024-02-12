import CategorySlice from "./CategorySlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
	reducer:{
		category:CategorySlice
	}
})