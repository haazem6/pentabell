import axios from "axios";
import { login, register } from "../redux/features/userSlice";

export const signup = async (formData, dispatch, navigate) => {
    try {
        const {data} = await axios.post("http://localhost:5000/api/user/signup", formData);
        dispatch(register(data));
        navigate("/", {replace: true});
    } catch (error) {
        console.log(error.response.data);
    }   
}
export const signin = async (formData, dispatch, navigate) => {
    try {
        const {data} = await axios.post("http://localhost:5000/api/user/signin", formData);
        dispatch(login(data));
        navigate("/", {replace: true});
    } catch (error) {
        console.log(error.response);
    }   
}

export const resetPassword = async (formPassword, dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost/5000/api/user/resetPassword`, formPassword);
        console.log(data);
    } catch (error) {
        console.log(error.response)
    }
}