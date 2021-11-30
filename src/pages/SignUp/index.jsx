/* --------------------------------- SYSTEM --------------------------------- */
import { useHistory } from "react-router";
/* --------------------------------- PROJECT -------------------------------- */
import { api } from "../../services/api";

/* -------------------------------- AUXILIARY ------------------------------- */
import toast from "react-hot-toast";

/* ---------------------------------- FORM ---------------------------------- */
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

/* ---------------------- STYLES AND STYLED COMPONENTS ---------------------- */
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Logo, Container, Content } from "./styles";
import logo from "../../assets/images/logo.png";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

/* ---------------------------------- PAGE ---------------------------------- */
const Signup = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    email: yup
      .string()
      .email("Email inválido")
      .required("Campo email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Deve ter no mínimo 8 caracteres")
      .matches(/^(?=.*[A-Z])/, "Deve conter pelo menos uma letra maiúscula")
      .matches(/^(?=.*[a-z])/, "Deve conter pelo menos uma letra minúscola")
      .matches(/^(?=.*[0-9])/, "Deve conter pelo menos um número")
      .matches(
        /^(?=.*[-+_!@#$%^&*., ?]).+$/,
        "Deve conter pelo menos um caracter especial"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem")
      .required("Campo confirmar senha obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitForm = (data) => {
    delete data.passwordConfirm;

    api
      .post("/users/", data)
      .then((_) => {
        toast.success("Conta cadastrada com sucesso");
        history.push("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Content>
        <Logo href="/">
          <ShoppingCartCheckoutIcon
            sx={{ fontSize: "80px" }}
            color={"primary"}
          />
          <div>
            <img src={logo} alt="Kenzie Shop" />
            <span>Shop</span>
          </div>
        </Logo>
        <h2>Faça seu cadastro</h2>
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
            autoComplete="email"
            label={!!errors.email ? errors.email.message : "email"}
            variant="outlined"
            color="secondary"
            {...register("email")}
            error={!!errors.email}
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

          <TextField
            autoComplete="passwordConfirm"
            label={
              !!errors.passwordConfirm
                ? errors.passwordConfirm.message
                : "Confirme sua senha"
            }
            variant="outlined"
            type="password"
            color="secondary"
            {...register("passwordConfirm")}
            error={!!errors.passwordConfirm}
          />

          <Button variant="contained" size="medium" type="submit">
            Cadastrar
          </Button>
        </form>
        <p>
          Já tem uma conta?{" "}
          <Link to="/login">
            <span>Entrar</span>
          </Link>
        </p>
      </Content>
    </Container>
  );
};

export default Signup;
