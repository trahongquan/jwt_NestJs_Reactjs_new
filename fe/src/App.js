// App.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserRole } from './userActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserRole());
  }, [dispatch]);

  // Hiển thị nội dung tương ứng với vai trò người dùng
  return (
    <div>
    <h1> Đây là người dùng</h1>
      {/* Hiển thị component dựa trên vai trò người dùng */}
    </div>
  );
};