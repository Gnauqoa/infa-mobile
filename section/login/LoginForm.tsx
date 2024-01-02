import { Text } from "@rneui/base";
import { View } from "react-native";
import { Input } from "../../atomic";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { InputType } from "../../atomic/Input";

const LoginForm = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        gap: 20,
        width: "100%",
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: "700", color: "#212121" }}>
        Đăng nhập
      </Text>
      <Input
        startIcon={<Ionicons name="person" size={20} color="#9E9E9E" />}
        inputProps={{ placeholder: "Tên đăng nhập/ số điện thoại" }}
      />
      <Input
        inputProps={{ placeholder: "Mật khẩu" }}
        type={InputType.password}
        startIcon={<AntDesign name="lock" size={20} color="#9E9E9E" />}
      />
    </View>
  );
};

export default LoginForm;
