import { FontAwesome } from "@expo/vector-icons";
import { Image, ImageSourcePropType, Text, View } from "react-native";

export const NewsItem = [
  {
    avatar: require("../../assets/images/avatar.png"),
    name: "Nguyễn Thị Mon",
    title: "Cần mua 6 ký ổi",
    description: "Cần mua gấp sáu ký ổi giao làng Đại học...",
    createAt: "24 phút trước",
    repliesCount: 35,
  },
  {
    avatar: require("../../assets/images/avatar.png"),
    name: "Trần Văn Đô",
    title: "Cần mua 6 ký ổi",
    description: "Cần mua gấp sáu ký ổi giao làng Đại học...",
    createAt: "24 phút trước",
    repliesCount: 35,
  },
  {
    avatar: require("../../assets/images/avatar.png"),
    name: "La Văn Rê",
    title: "Cần mua 6 ký ổi",
    description: "Cần mua gấp sáu ký ổi giao làng Đại học...",
    createAt: "24 phút trước",
    repliesCount: 35,
  },
];

const NewItem = ({
  avatar,
  name,
  title,
  description,
  createAt,
  repliesCount,
}: {
  avatar: ImageSourcePropType;
  name: string;
  title: string;
  description: string;
  createAt: string;
  repliesCount: number;
}) => {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{ width: "100%", flexDirection: "row", alignItems: "center" }}
      >
        <Image source={avatar} style={{ width: 27, height: 20 }} />
        <Text style={{ fontSize: 18, fontWeight: "400", color: "#000" }}>
          {name}
        </Text>
        <FontAwesome name="bookmark" size={20} color="black" />
      </View>
      <View style={{ gap: 12 }}>
        <Text style={{ fontSize: 17, fontWeight: "700" }}>{title}</Text>
        <Text style={{ fontSize: 17, fontWeight: "400", color: "#000" }}>
          {description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "400", color: "#989AA6" }}>
          {createAt}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "400", color: "#000000" }}>
          {repliesCount} Phản hồi
        </Text>
      </View>
    </View>
  );
};

export default NewItem;
