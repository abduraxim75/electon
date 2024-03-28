import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, UserByGoogle } from '../../types/index';
import instance from "../../helpers/axios/axios";
import { AxiosResponse } from "axios";



interface Auth {
    token: string,
    user: User | null,
}

const initialState: Auth = {
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user") as string) as User
};

const CreateUser = createAsyncThunk("auth/register",async(UserByGoogle:UserByGoogle,{rejectWithValue})=>{
    try {
        const response = await instance.post("/auth/register",UserByGoogle);
        if(response.status === 200){
        response.data.payload
        window.location.href = window.origin + "/login"
    }
        throw new Error("something went wrong")
        
    } catch (error:any) {
        return rejectWithValue(error.response.data)
        
    }

})
    


const loginuser = createAsyncThunk("auth/login", async (userByGoogle: UserByGoogle, { rejectWithValue }) => {
    try {
        const response = await instance.post("/auth/login", userByGoogle);
        if (response.status === 200) return response.data.payload
        throw new Error("something went wrong")
    } catch (error: any) {
        return rejectWithValue(error.response.data)

    }

})

const Getprofile = createAsyncThunk("auth/Getprofile", async (_value, { }) => {
    try {
        const response: AxiosResponse = await instance("/auth/profile",{
            headers:{
                "Authorization":"Bearer " + localStorage.getItem("token") as string
            }
        })
        if (response.status === 401 || response.status === 403) throw new Error("something went wrong")
        return response.data.payload
    }
    catch (error: any) {
        console.log(error)
    }
}
)

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginuser.fulfilled, (state, action: PayloadAction<Auth>) => {
            if (action.payload.token) {
                state.token = action.payload.token;
                state.user = action.payload.user;
                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("user", JSON.stringify(action.payload.user));

                const redirectPath = action.payload.user?.role === "admin" ? "/dashboard" : "/profile";
                window.location.href = window.origin + redirectPath;
            }
        });

        builder.addCase(Getprofile.rejected, (state) => {
            state.token = "";
            state.user = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = window.origin + "/login"
        });
    },
});



export { loginuser, Getprofile,CreateUser }
export default AuthSlice.reducer;