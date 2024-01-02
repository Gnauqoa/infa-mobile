import { Image, ImageProps, View } from "react-native";

const Method = ({ source }: { source: ImageProps["source"] }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#EEEEEE",
        paddingHorizontal: 32,
        paddingVertical: 16,
      }}
    >
      <Image style={{ width: 24, height: 24 }} source={source} />
    </View>
  );
};

const LoginMethod = () => {
  return (
    <View
      style={{
        paddingTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        gap: 50,
      }}
    >
      <Method source={require("../../assets/icon/google.png")} />
      <Method source={require("../../assets/icon/facebook.png")} />
    </View>
  );
};

export default LoginMethod;
