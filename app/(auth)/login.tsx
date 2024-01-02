import { Text } from "@rneui/base";
import { Container, Logo } from "../../components";
import { BackButton } from "../../section/login";
import LoginForm from "../../section/login/LoginForm";

const Login = () => {
  return (
    <Container>
      <BackButton />
      <Logo />
      <LoginForm />
    </Container>
  );
};

export default Login;
