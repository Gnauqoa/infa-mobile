import { View } from "react-native";
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
