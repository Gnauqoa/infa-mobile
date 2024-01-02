import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const RegisterText = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        width: "100%",
        paddingTop: 24,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: "400", color: "#9E9E9E" }}>
        Bạn chưa có tài khoản
      </Text>
      <TouchableOpacity>
        <Link href={"/(auth)/register"}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#01B763" }}>
            Đăng ký
          </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterText;
