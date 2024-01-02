import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
const AppBar = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
        marginHorizontal: 24,
        paddingVertical: 16,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity style={{ borderRadius: 999, padding: 4 }}>
        <Feather name="menu" size={24} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", display: "flex" }}>
        <Image source={require("../../assets/logo/logo-mini.png")} />
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#000204" }}>
          INFA
        </Text>
      </View>
      <Image
        source={require("../../assets/images/avatar.png")}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
};

export default AppBar;
