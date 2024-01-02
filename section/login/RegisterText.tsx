import { Link } from "expo-router";
import { Text, View } from "react-native";

const RegisterText = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: "400", color: "#9E9E9E" }}>
        Bạn chưa có tài khoản
      </Text>
      <Link href={"/(auth)/register"}>
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#01B763" }}>
          Đăng ký
        </Text>
      </Link>
    </View>
  );
};

export default RegisterText;
