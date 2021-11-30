/* --------------------------------- SYSTEM --------------------------------- */
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

/* --------------------------------- PROJECT -------------------------------- */
// import { loginThunk } from "../../store/user/thunks";
import { useUser } from "../../providers/User";
import logo from "../../assets/images/logo.png";
/* ---------------------------------- FORM ---------------------------------- */
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

/* ---------------------- STYLES AND STYLED COMPONENTS ---------------------- */
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Logo, Container, Content } from "./styles";
import { Button, TextField } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { signIn } = useUser();

  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    password: yup.string().required("Campo senha obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // const handleSubmitForm = (data) => {
  //   dispatch(loginThunk(data, history));
  // };

  const handleSubmitForm = (data) => {
    signIn(data, history);
  };

  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo>
            <ShoppingCartCheckoutIcon
              sx={{ fontSize: "80px" }}
              color={"primary"}
            />
            <div>
              <img src={logo} alt="Kenzie Shop" />
              <span>Shop</span>
            </div>
          </Logo>
        </Link>
        <h2>Faça Login em sua conta</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <TextField
            autoComplete="username"
            label={
              !!errors.username ? errors.username.message : "Nome de usuário"
            }
            variant="outlined"
            margin="dense"
            color="secondary"
            {...register("username")}
            error={!!errors.username}
          />
          <TextField
            autoComplete="password"
            label={!!errors.password ? errors.password.message : "Senha"}
            variant="outlined"
            type="password"
            color="secondary"
            {...register("password")}
            error={!!errors.password}
          />
          <Button variant="contained" size="medium" type="submit">
            Entrar
          </Button>
        </form>
        <p>
          Não possui uma conta?{" "}
          <Link to="/signup">
            <span>Cadastre-se</span>
          </Link>
        </p>
      </Content>
    </Container>
  );
};

export default Login;
