import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { backendUrl } from "../../config";

function AdminDetails() {
  const { id } = useParams();
  const [updateBrand, setUpdateBrand] = useState("");
  const [updateModel, setUpdateModel] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateResell, setUpdateResell] = useState("");
  const [updateUrl, setUpdateUrl] = useState("");

  useEffect(() => {
    fetch(`${backendUrl}/shoes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUpdateBrand(data.brand);
        setUpdateModel(data.model);
        setUpdateDate(data.date);
        setUpdatePrice(data.price);
        setUpdateResell(data.resell);
        setUpdateUrl(data.url);
      })
      .catch((e) => console.error(e));
  }, [id]);

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
      url: `${backendUrl}/shoes/${id}`,
    }).then((res) => console.log(res));
  };

  return (
    <div className="form-box">
      <h1>Update shoe</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupUsername">
          <Form.Control type="text" value={updateBrand} onChange={(e) => setUpdateBrand(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="text" value={updateModel} onChange={(e) => setUpdateModel(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control type="date" value={updateDate} onChange={(e) => setUpdateDate(new Date(e.target.value))} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control type="number" value={updatePrice} onChange={(e) => setUpdatePrice(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control type="text" value={updateResell} onChange={(e) => setUpdateResell(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control type="text" value={updateUrl} onChange={(e) => setUpdateUrl(e.target.value)} />
        </Form.Group>
        <Button type="submit" onClick={update}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default AdminDetails;
