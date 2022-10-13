import { configureStore } from '@reduxjs/toolkit'
import favouriteReducer from './slices/faviourites'

export const store = configureStore({
  reducer: {
    favouriteMeals: favouriteReducer
  },
})