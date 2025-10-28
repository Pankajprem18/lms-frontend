import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

// Safe parser to avoid JSON errors
const safeParse = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    if (!value || value === "undefined" || value === "null") return fallback;
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const initialState = {
  isLoggedIn: safeParse("isLoggedIn", false),
  role: localStorage.getItem("role") || "",
  data: safeParse("data", {})
};

// SIGNUP
export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = axiosInstance.post("user/register", data);
    toast.promise(res, {
      loading: "Wait! Creating your account...",
      success: (data) => data?.data?.message,
      error: "Failed to create account"
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// LOGIN
export const login = createAsyncThunk("/auth/login", async (data) => {
  try {
    const res = axiosInstance.post("user/login", data);
    toast.promise(res, {
      loading: "Authenticating...",
      success: (data) => data?.data?.message,
      error: "Failed to log in"
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// LOGOUT
export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
    const res = axiosInstance.post("user/logout");
    toast.promise(res, {
      loading: "Logging out...",
      success: (data) => data?.data?.message,
      error: "Failed to log out"
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// UPDATE PROFILE
export const updateProfile = createAsyncThunk("/user/update/profile", async (data) => {
  try {
    const res = axiosInstance.put(`user/update/${data[0]}`, data[1]);
    toast.promise(res, {
      loading: "Updating profile...",
      success: (data) => data?.data?.message,
      error: "Failed to update profile"
    });
    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// FETCH USER DATA
export const getUserData = createAsyncThunk("/user/details", async () => {
  try {
    const res = axiosInstance.get("user/me");
    return (await res).data;
  } catch (error) {
    toast.error(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (!action.payload?.user) return;

        const user = action.payload.user;
        state.isLoggedIn = true;
        state.data = user;
        state.role = user.role;

        localStorage.setItem("data", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        localStorage.setItem("role", user.role);
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.data = {};
        state.role = "";

        localStorage.removeItem("data");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("role");
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        if (!action.payload?.user) return;

        const user = action.payload.user;
        state.isLoggedIn = true;
        state.data = user;
        state.role = user.role;

        localStorage.setItem("data", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        localStorage.setItem("role", user.role);
      });
  }
});

export default authSlice.reducer;
