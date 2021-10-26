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
      if (res.data === null) {
        history.push("/");
      } else {
        console.log(res.data);
      }
    });
  };
  console.log("qwe");

  UserAuth();
};

export default Authentication;
