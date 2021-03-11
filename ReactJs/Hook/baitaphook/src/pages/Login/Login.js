import React, { useState } from "react";

export default function Login(props) {
  const [userLogin, setUserLogin] = useState({ userName: "", passWord: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserLogin({
      ...userLogin,
      [name]: value,
    });
    console.log(props);
    console.log(value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      userLogin.userName === "cyberlearn" &&
      userLogin.passWord === "cyberlearn"
    ) {
      // thành công thì chuyển về trang trước đó
      props.history.goBack();

      // ép đăng nhập xong trở về trang home
      // chuyển hướng đến path tương ứng
      // props.history.push('/home')

      // replace thay đổi nội dung tương ứng
      // props.history.replace();
      localStorage.setItem("userLogin", JSON.stringify(userLogin));
    } else {
      alert("login failed");
    }
  };
  return (
    <form className="container" onSubmit={handleLogin}>
      <h3 className="display-4">Login</h3>
      <div className="form-group">
        <p>User Name</p>
        <input
          name="userName"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          type="password"
          name="passWord"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Dang nhap</button>
      </div>
    </form>
  );
}
