import { createSlice } from "@reduxjs/toolkit";

const hoursManagementSlice = createSlice({
    name: 'hoursManagement',
    initialState:{
        scheduledHours:{
            work:11,
            home:5,
            sleep:8
        },
        actualHours:{
            work:0,
            home:0,
            sleep:0
        },

    },
    reducers:{
        SET_SCHEDULE_HOURS(state,action){
            state = {
                ...state,
                scheduledHours:action.payload
            }
            return state
        },
        SET_ACTUAL_HOURS(state,action){
            state = {
                ...state,
                actualHours:action.payload
            }
            return state
        }
    }
})

export const { SET_SCHEDULE_HOURS } = hoursManagementSlice.actions
export default hoursManagementSlice.reducer