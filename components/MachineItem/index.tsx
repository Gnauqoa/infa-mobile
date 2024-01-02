import { AntDesign } from "@expo/vector-icons";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useColors from "../../hooks/useColors";
import { useRouter } from "expo-router";

const MachineItem = ({
  id,
  source,
  title,
  star,
  hired,
  location,
  price,
}: {
  id: number | string;
  source: ImageSourcePropType;
  title: string;
  star: number;
  hired: number;
  location: string;
  price: number;
}) => {
  const { replace, push } = useRouter();
  const color = useColors();
  return (
    <View style={{ flexDirection: "column", gap: 16 }}>
      <TouchableOpacity onPress={() => replace(`/(product)/${id}`)}>
        <Image source={source} style={{ width: 240, height: 240 }} />
      </TouchableOpacity>
      <View style={{ flexDirection: "column", gap: 12 }}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "#212121" }}>
          {title}
        </Text>
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <AntDesign name="star" size={24} color={color.primary} />
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#616161" }}>
            {star}
          </Text>
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 12,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: color.primary,
              borderRadius: 12,
            }}
          >
            <Text
              style={{ fontSize: 10, fontWeight: "600", color: color.primary }}
            >
              {hired} Đã thuê
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 12, fontWeight: "600", color: color.primary }}>
          {location}
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "700",
          color: "#000",
        }}
      >
        {price}
      </Text>
    </View>
  );
};

export default MachineItem;
