import React from "react";
import { Redirect } from "react-router-dom";

export default function Profile(props) {
  if (localStorage.getItem("userLogin")) {
    return <div>Profile Tran Tri Hung</div>;
  } else {
    alert("vui long dang nhap de vao trang nay");
    return <Redirect to="/login" />;
  }
}
