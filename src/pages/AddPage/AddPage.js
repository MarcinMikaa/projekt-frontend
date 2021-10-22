import "./AddPage.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { axios } from "axios";

function AddPage() {
  const [newBrand, setNewBrand] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newResell, setNewResell] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const add = () => {
    axios({
      method: "POST",
      data: {
        brand: newBrand,
        model: newModel,
        date: newDate,
        price: newPrice,
        resell: newResell,
        url: newUrl,
      },
      withCredentials: true,
      url: "http://localhost:4000/",
    }).then((res) => console.log(res));
  };

  return (
    <div className="add-page">
      <div className="form-box">
        <h1>AddPage</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Control type="text" placeholder="Brand" onChange={(e) => setNewBrand(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="text" placeholder="Model" onChange={(e) => setNewModel(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="date" placeholder="Date" onChange={(e) => setNewDate(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="text" placeholder="Date" onChange={(e) => setNewPrice(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="text" placeholder="Resell" onChange={(e) => setNewResell(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="text" placeholder="Url" onChange={(e) => setNewUrl(e.target.value)} />
          </Form.Group>
          <Button onClick={add}>Add</Button>
        </Form>
      </div>
    </div>
  );
}

export default AddPage;
