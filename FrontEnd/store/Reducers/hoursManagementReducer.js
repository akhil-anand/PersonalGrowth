import { createSlice } from "@reduxjs/toolkit";

const hoursManagementSlice = createSlice({
    name: 'hoursManagement',
    initialState:{
        scheduledHours:{
            work:11,
            home:5,
            sleep:8
        }
    },
    reducers:{
        SET_HOURS(state,action){
            state = {
                ...state,
                scheduledHours:action.payload
            }
            return state
        }
    }
})

export const { SET_HOURS } = hoursManagementSlice.actions
export default hoursManagementSlice.reducer