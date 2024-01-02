import { Container, Logo } from "../../components";
import {
  BackButton,
  Badge,
  LoginForm,
  LoginMethod,
  RegisterText,
} from "../../section/login";

const Login = () => {
  return (
    <Container>
      <BackButton />
      <Logo />
      <LoginForm />
      <Badge />
      <LoginMethod />
      <RegisterText />
    </Container>
  );
};

export default Login;
