import "./UpdatePage.css";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function UpdatePage() {
  const history = useHistory();

  const [updateBrand, setUpdateBrand] = useState("");
  const [updateModel, setUpdateModel] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateResell, setUpdateResell] = useState("");
  const [updateUrl, setUpdateUrl] = useState("");

  const update = () => {
    axios({
      method: "PUT",
      data: {
        brand: updateBrand,
        model: updateModel,
        date: updateDate,
        price: updatePrice,
        resell: updateResell,
        url: updateUrl,
      },
      withCredentials: true,
      url: "http://localhost:4000/update",
    }).then((res) => console.log(res));
  };

  return (
    <div className="update-page">
      <div className="form-box">
        <h1>Update existing shoe</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Control type="text" placeholder="Brand" onChange={(e) => setUpdateBrand(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="text" placeholder="Model" onChange={(e) => setUpdateModel(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="date" placeholder="Date" onChange={(e) => setUpdateDate(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="number" placeholder="Price" onChange={(e) => setUpdatePrice(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="text" placeholder="Resell" onChange={(e) => setUpdateResell(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="text" placeholder="Url" onChange={(e) => setUpdateUrl(e.target.value)} />
          </Form.Group>
          <Button onClick={update}>Update</Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdatePage;
