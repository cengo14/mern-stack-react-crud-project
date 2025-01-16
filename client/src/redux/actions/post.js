import { toast } from "react-toastify";
import { api } from "../../utils/api";

export const getPostsAction = () => async (dispatch) => {
    try {
        const { data } = await api.get("/getPosts"
        );
        dispatch({ type: "GET_POSTS", payload: data });
        toast.success("Postlar başarılı bir şekilde alındı");

    } catch (error) {
        toast.error("Bir hata oluştu: " + (error.response?.data?.msg));
    }

}
export const createPostAction = (postData) => async (dispatch) => {
    try {
        const { data } = await api.post("/createPost", postData
        );
        dispatch({ type: "CREATE_POSTS", payload: data });
        toast.success("Postala oluşturuldu");

    } catch (error) {
        toast.error("Bir hata oluştu: " + (error.response?.data?.msg));
    }

}
export const updatePostAction = (id, postData) => async (dispatch) => {
    try {
        const { data } = await api.patch(`/updatePost/${id}`, postData
        );
        dispatch({ type: "UPDATE_POSTS", payload: data });
        toast.success("Postala güncellendi");

    } catch (error) {
        toast.error("Bir hata oluştu: " + (error.response?.data?.msg));
    }

}

export const deletePostAction = (id) => async (dispatch) => {
    try {
        await api.delete(`/deletePost/${id}`
        );
        dispatch({ type: "DELETE_POSTS", payload: id });
        toast.success("Postala silindi");

    } catch (error) {
        toast.error("Bir hata oluştu: " + (error.response?.data?.msg));
    }

}