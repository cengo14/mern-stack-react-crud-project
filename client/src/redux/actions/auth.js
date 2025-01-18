
import { api } from "../../utils/api";
import { toast } from "react-toastify";

export const registerAction = (authData) => async (dispatch) => {
    try {
        const response = await api.post("/register", authData, {
            headers: {
                "Content-Type": "application/json"  // JSON formatında gönderim yapıyoruz
            }
        });
        if (response && response.data) {
            dispatch({ type: "REGISTER", payload: response.data });
            toast.success("Kayıt Başarılı");
            window.location.href = "/";
        } else {
            toast.error("Veri alınamadı.");
        }
    } catch (error) {
        toast.error("Bir hata oluştu: " + (error.response?.data?.msg || error.message));
    }

}
export const loginAction = (authData) => async (dispatch) => {
    try {
        const { data } = await api.post("/login", authData);
        dispatch({ type: "LOGIN", payload: data });
        toast.success("Kayıt Başarılı");
        window.location.href = "/";
    } catch (error) {
        toast.error("Bir hata oluştu" + " " + error.response.data.msg);
    }
}