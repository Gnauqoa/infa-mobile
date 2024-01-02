import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const BackButton = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        width: "100%",
        paddingVertical: 12,
      }}
    >
      <TouchableOpacity>
        <Link href={"/(auth)/login"}>
          <AntDesign name="back" size={28} color="#000" />{" "}
        </Link>
      </TouchableOpacity>
      <Text style={{ fontSize: 24, fontWeight: "700", color: "#212121" }}>
        Điền thông tin cá nhân
      </Text>
    </View>
  );
};

export default BackButton;
