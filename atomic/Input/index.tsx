import { ReactNode } from "react";
import { TouchableOpacity, ViewProps } from "react-native";
import { TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import useToggle from "../../hooks/useToggle";

export enum InputType {
  password = "password",
  text = "text",
}

const Input = ({
  inputProps,
  containerProps,
  startIcon,
  endIcon,
  type,
}: {
  endIcon: ReactNode;
  startIcon: ReactNode;
  containerProps: ViewProps;
  inputProps: TextInputProps;
  type: InputType;
}) => {
  const { toggle: show, onToggle } = useToggle();
  return (
    <View
      style={{
        borderRadius: 16,
        backgroundColor: "#FAFAFA",
        gap: 3,
        paddingVertical: 5,
        paddingHorizontal: 5,
      }}
      {...containerProps}
    >
      {startIcon}
      <TextInput
        style={{ fontSize: 14, fontWeight: "400", color: "#fff" }}
        placeholderTextColor="#9E9E9E"
        {...inputProps}
      />
      {type === InputType.password && (
        <TouchableOpacity onPress={onToggle}>
          <Feather name={show ? "eye" : "eye-off"} size={20} color="#9E9E9E" />
        </TouchableOpacity>
      )}
      {endIcon}
    </View>
  );
};

export default Input;
