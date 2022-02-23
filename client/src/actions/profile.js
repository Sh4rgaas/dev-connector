import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PROFILE,
    PROFILE_ERROR
} from './types';

// Get the current user's profile

export const getCurrentProfile = () => async (dispatch) => {
    console.log('hi erlich');
    try {
        const res = await axios.get('/api/profile/me');
        console.log(res.data);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (err) {
        dispatch ({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}