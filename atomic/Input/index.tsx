import { ReactNode, useState } from "react";
import {
  StyleProp,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from "react-native";
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
  type = InputType.text,
}: {
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  containerProps?: ViewProps;
  inputProps?: TextInputProps;
  type?: InputType;
}) => {
  const containerStyle = containerProps?.style;
  delete containerProps?.style;
  const { toggle: show, onToggle } = useToggle(true);

  return (
    <View
      style={{
        borderRadius: 16,
        backgroundColor: "#FAFAFA",
        gap: 12,
        display: "flex",
        paddingVertical: 20,
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 20,
        ...containerStyle,
      }}
      {...containerProps}
    >
      {startIcon}
      <TextInput
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#000",
          flex: 1,
        }}
        placeholderTextColor="#9E9E9E"
        secureTextEntry={type === InputType.password && show}
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
