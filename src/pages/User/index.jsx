import { Container, Content } from "./styles";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logoutThunk } from "../../store/user/thunks";
import { useUser } from "../../providers/User";

const User = () => {
  const history = useHistory();
  // const dispach = useDispatch();
  const { signOut } = useUser();

  const { username, email } = JSON.parse(
    localStorage.getItem("@kenzieshop:user")
  );

  const handleLogout = () => {
    localStorage.removeItem("@kenzieshop:user");
    localStorage.removeItem("@kenzieshop:token");
    // dispach(logoutThunk());
    signOut();
    history.push("/");
  };

  return (
    <Container>
      <Content>
        <h1>Seus dados:</h1>
        <p>
          Nome de usuário: <span>{username}</span>
        </p>
        <p>
          Email: <span>{email}</span>{" "}
        </p>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={handleLogout}
        >
          Logout
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={() => history.push("/")}
        >
          Voltar às compras
        </Button>
      </Content>
    </Container>
  );
};

export default User;
