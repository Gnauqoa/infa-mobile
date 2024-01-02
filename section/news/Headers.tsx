import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import useColors from "../../hooks/useColors";

const Headers = () => {
  const { back, push } = useRouter();
  const color = useColors();
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
        TIN MUA HÔM NAY
      </Text>
      <TouchableOpacity onPress={() => push("/(product)/add")}>
        <Text style={{ fontSize: 15, fontWeight: "400", color: color.primary }}>
          Đăng tin
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Headers;
