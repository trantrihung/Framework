import React, { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { GET_API } from "../../Redux/constants/ProductListConstants";

export default function Home() {
  const { courses } = useSelector((state) => state.ProducListReducer);
  const dispatch = useDispatch();

  const getAPI = () => {
    Axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
    })
      .then((res) => {
        dispatch({
          type: GET_API,
          courses: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl p-4">Danh sach Khoa Hoc</h1>
      <div className="grid grid-cols-3 gap-3">
        <Card />
      </div>
    </div>
  );
}
