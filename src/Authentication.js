import { useHistory } from "react-router-dom";
import axios from "axios";

const Authentication = () => {
  const history = useHistory();

  const UserAuth = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      history.push("/");
      if (res.data.username === undefined) {
        history.push("/");
      } else {
        console.log(res.data);
      }
    });
  };
  console.warn("qwe");

  UserAuth();
};

export default Authentication;
