import "./ShoeDetail.css";
import { useEffect, useState } from "react";

function ShoeDetail() {
  const [shoeDetail, setShoeDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/shoe/:id")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setShoeDetail(data);
        // console.log(shoeDetail);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="shoe-detail">
      <h1>{shoeDetail.model}</h1>
    </div>
  );
}

export default ShoeDetail;
