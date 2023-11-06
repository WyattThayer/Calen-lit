import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    username:'',
    password:'',
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SET_USERNAME':
            let newUsername={
                ...state,
                username:action.payload
            }
            console.log(`username`)
        return newUsername

        case 'SET_PASSWORD':
            let newPassword ={
                ...state,
                password:action.payload
            }
            return newPassword
        default:
            console.log('hit default')
            return state
    }
}

const store = configureStore({
    reducer:reducer
})

export default store