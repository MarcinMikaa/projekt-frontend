import "./ActionPage.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function ActionPage() {
  const [newBrand, setNewBrand] = useState("");
  const [newModel, setNewModel] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newResell, setNewResell] = useState("");
  const [newUrl, setNewUrl] = useState("");

  // const [updateBrand, setUpdateBrand] = useState("");
  // const [updateModel, setUpdateModel] = useState("");
  // const [updateDate, setUpdateDate] = useState("");
  // const [updatePrice, setUpdatePrice] = useState("");
  // const [updateResell, setUpdateResell] = useState("");
  // const [updateUrl, setUpdateUrl] = useState("");

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
      url: "http://localhost:4000/action",
    }).then((res) => console.log(res));
  };

  // const update = () => {
  //   axios({
  //     method: "PUT",
  //     data: {
  //       brand: updateBrand,
  //       model: updateModel,
  //       date: updateDate,
  //       price: updatePrice,
  //       resell: updateResell,
  //       url: updateUrl,
  //     },
  //     withCredentials: true,
  //     url: "http://localhost:4000/action",
  //   }).then((res) => console.log(res));
  // };

  return (
    <div className="action-page">
      <div className="form-box">
        <h1>Add new shoe</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Control type="text" placeholder="Brand" onChange={(e) => setNewBrand(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="text" placeholder="Model" onChange={(e) => setNewModel(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="date" placeholder="Date" onChange={(e) => setNewDate(new Date(e.target.value))} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="number" placeholder="Price" onChange={(e) => setNewPrice(e.target.value)} />
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

      {/* <div className="form-box">
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
      </div> */}
    </div>
  );
}

export default ActionPage;
