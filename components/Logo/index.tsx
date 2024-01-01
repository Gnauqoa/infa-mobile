import { DimensionValue, Image } from "react-native";

const Logo = ({
  width,
  height,
}: {
  width?: DimensionValue;
  height?: DimensionValue;
}) => {
  return (
    <Image
      style={{ width: width || 324.5, height: height || 167.6 }}
      source={require("../../assets/logo/Logo.png")}
    />
  );
};

export default Logo;
