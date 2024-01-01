import { Text, TouchableOpacity } from "react-native";
import { Container } from "../../components";
import { BackButton } from "../../section/login";
import { Link } from "expo-router";

const Onboarding = () => {
  return (
    <Container>
      <BackButton />
      <Link href={"/(auth)/login"}>
        <Text>asdasd</Text>
      </Link>
    </Container>
  );
};

export default Onboarding;
