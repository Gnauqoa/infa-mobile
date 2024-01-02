import { ReactNode } from "react";
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from "react-native";
import useColors from "../../hooks/useColors";

const Button = ({
  containerProps,
  textProps,
  children,
  onPress,
}: {
  onPress?: TouchableOpacityProps["onPress"];
  containerProps?: TouchableOpacityProps;
  textProps?: TextProps;
  children: ReactNode;
}) => {
  const color = useColors();
  const containerStyle = containerProps?.style;
  delete containerProps?.style;
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: 900,
        width: "100%",
        backgroundColor: color.primary,
        justifyContent: "center", 
        alignItems: "center",
        ...containerStyle,
      }}
      onPress={onPress}
      {...containerProps}
    >
      <Text
        style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}
        {...textProps}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
