import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const Headers = () => {
  const { back } = useRouter();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TouchableOpacity onPress={back}>
        <AntDesign name="left" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "500", color: "#000" }}>
        ĐĂNG TIN MỚI
      </Text>
      <View></View>
    </View>
  );
};
export default Headers;
