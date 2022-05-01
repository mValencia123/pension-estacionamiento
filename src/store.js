import { configureStore } from '@reduxjs/toolkit'
import parkReducer from './state/park/parkSlice'

export default configureStore({
  reducer: {
      parkReducer
  },
})