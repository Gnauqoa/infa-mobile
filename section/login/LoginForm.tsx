import { Text } from "@rneui/base";
import { View } from "react-native";

const LoginForm = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: "700", color: "#212121" }}>
        Đăng nhập
      </Text>
    </View>
  );
};

export default LoginForm;
