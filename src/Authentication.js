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
      if (!res.user) {
        history.push("/");
      } 
    });
  };

  UserAuth();
};

export default Authentication;
