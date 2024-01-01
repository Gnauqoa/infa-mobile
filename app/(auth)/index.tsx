import { Text } from "@rneui/base";
import { View } from "react-native";

const Onboarding = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text h1={true} style={{ color: "#000", fontSize: 16 }}>
        native
      </Text>
    </View>
  );
};

export default Onboarding;
