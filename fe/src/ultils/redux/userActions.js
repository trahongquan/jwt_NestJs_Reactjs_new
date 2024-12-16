// // userActions.js
// import axios from 'axios';
// import { API_ROOT } from 'ultils/consatnts';
// import { setRole } from './userSlice';

// export const fetchUserRole = () => async (dispatch) => {
    //     const response = await axios(`${API_ROOT}/users/role`);
    //     const data = await response.json();
    //     dispatch(setRole(data.role));
    // };
    
    // userActions.js
import { API_ROOT } from 'ultils/consatnts';
import axios from './axiosConfig';
import { setRole } from './userSlice';

export const fetchUserRole = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_ROOT}/users/role`);
    dispatch(setRole(response.data.role));
  } catch (error) {
    // Xử lý lỗi khi gọi API
  }
};