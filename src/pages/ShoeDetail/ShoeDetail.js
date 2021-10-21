import "./ShoeDetail.css";
import { useEffect, useState } from "react";

function ShoeDetail() {
  const [shoeDetail, setShoeDetail] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/shoes");
  });

  return <div className="shoe-detail">
    
  </div>;
}

export default ShoeDetail;
