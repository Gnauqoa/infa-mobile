import { Container, Logo } from "../../components";
import { BackButton, Badge, LoginForm, LoginMethod } from "../../section/login";

const Login = () => {
  return (
    <Container>
      <BackButton />
      <Logo />
      <LoginForm />
      <Badge />
      <LoginMethod />
    </Container>
  );
};

export default Login;
