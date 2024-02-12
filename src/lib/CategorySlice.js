const { createSlice } = require("@reduxjs/toolkit");

export const categorySlice = createSlice({
	name: 'categorySlice',
	initialState: {
		category: true
	},
	reducers: {
		setCategory: (state, action) => {
			state.category = action.payload
		}
	}
})

export default categorySlice.reducer;
export const { setCategory } = categorySlice.actions;