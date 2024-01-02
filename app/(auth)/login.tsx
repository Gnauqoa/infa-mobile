import { View } from "react-native";
import { Container, Logo } from "../../components";
import {
  Badge,
  LoginForm,
  LoginMethod,
  RegisterText,
} from "../../section/login";

const Login = () => {
  return (
    <Container>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Logo />
      </View>
      <LoginForm />
      <Badge />
      <LoginMethod />
      <RegisterText />
    </Container>
  );
};

export default Login;
