import { ReactNode } from "react";
import { Text, TextProps, TouchableOpacity, ViewProps } from "react-native";
import useColors from "../../hooks/useColors";

const Button = ({
  containerProps,
  textProps,
  children,
}: {
  containerProps?: ViewProps;
  textProps?: TextProps;
  children: ReactNode;
}) => {
  const color = useColors();
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
      }}
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
