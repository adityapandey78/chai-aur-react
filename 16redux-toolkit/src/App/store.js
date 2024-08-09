import {configureStore} from '@reduxjs/toolkit'
//ab store ko saare reducers ki knowledge chaiye 
 import todoReducer from '../features/todo/todoSlice'


//isme hum ek object pass krte hain
export const store= configureStore({
    reducer: todoReducer
})
//humne reducre daal diya isme