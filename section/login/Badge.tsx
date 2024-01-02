import { Text, View } from "react-native";

const Badge = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        paddingTop: 24,
        gap: 16,
        paddingHorizontal: 10,
      }}
    >
      <View style={{ flex: 1, backgroundColor: "#EEEEEE", height: 1 }}></View>
      <Text style={{ color: "#616161", fontSize: 18, fontWeight: "600" }}>
        hoặc tiếp tục với
      </Text>
      <View style={{ flex: 1, backgroundColor: "#EEEEEE", height: 1 }}></View>
    </View>
  );
};

export default Badge;
