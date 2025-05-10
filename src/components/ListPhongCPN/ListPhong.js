// ListPhong.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ListPhongCPN.scss";

function ListPhong() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/sanpham")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="list_phong_tong">
      {data.map((item, index) => (
        <Link
          to={`/chitietphong/${item.namekhongdau}`}
          state={{ item }}
          key={index}
          className="list_phong_item"
        >
          <img src={`http://localhost:8080/${item.img}`} alt={item.name} />
          <h3>{item.name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default ListPhong;
