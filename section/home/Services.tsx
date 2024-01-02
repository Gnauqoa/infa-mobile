import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const Services = () => {
  return (
    <View
      style={{
        marginTop: 44,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 24,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#303733" }}>
          Tiện ích
        </Text>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <AntDesign name="right" size={20} color="#7D8FAB" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Services;
