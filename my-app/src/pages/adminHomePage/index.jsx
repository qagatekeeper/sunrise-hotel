import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminMain, AdminNavbar } from "../../components/adminCom";

const AdminHomePage = () => {
  let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      navigate("/admin");
    }
  }, [navigate, userInfo]);
  return (
    <>
      <AdminNavbar />
      <AdminMain />
    </>
  );
};

export default AdminHomePage;
