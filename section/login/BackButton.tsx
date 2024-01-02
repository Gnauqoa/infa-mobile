import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

const BackButton = () => {
  return (
    <Link href={"/(auth)"}>
      <TouchableOpacity style={{ paddingVertical: 12 }}>
        <AntDesign name="back" size={28} color="#000" />
      </TouchableOpacity>
    </Link>
  );
};

export default BackButton;
