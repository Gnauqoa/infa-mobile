import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ServiceList: {
  title: string;
  source: ImageSourcePropType;
  backgroundColor: string;
  width: number;
  href?: string;
  height: number;
}[] = [
  {
    title: "Nông cụ",
    source: require("../../assets/images/nongcu.png"),
    backgroundColor: "#4AB7B6",
    width: 22,
    height: 18,
  },
  {
    title: "Nông sản",
    source: require("../../assets/images/nongsan.png"),
    backgroundColor: "#B7714A",
    width: 27,
    height: 18,
  },
  {
    title: "Đăng tin mua",
    source: require("../../assets/images/dangtinmua.png"),
    backgroundColor: "#B79F4A",
    width: 29,
    height: 19,
    href: "/(product)/news",
  },
  {
    title: "Đất thuê",
    source: require("../../assets/images/datthue.png"),
    backgroundColor: "#93423B",
    width: 29,
    height: 19,
    href: "/map",
  },
  {
    title: "Xưởng thuê",
    source: require("../../assets/images/xuongthue.png"),
    backgroundColor: "#8D71DD",
    width: 32,
    height: 19,
  },
  {
    title: "Sự kiện",
    source: require("../../assets/images/sukien.png"),
    backgroundColor: "#B74A4A",
    width: 25,
    height: 22,
  },
  {
    title: "Hỏi - đáp",
    backgroundColor: "#002BC1",
    source: require("../../assets/images/hoidap.png"),
    width: 22,
    height: 18,
  },
];

const Service = ({
  title,
  source,
  backgroundColor,
  width,
  index,
  height,
  href,
}: {
  href?: string;
  index: number;
  title: string;
  source: ImageSourcePropType;
  backgroundColor: string;
  width: number;
  height: number;
}) => {
  const { push } = useRouter();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        backgroundColor: backgroundColor,
        gap: 8,
        marginHorizontal: 16,
        marginLeft: index === 0 ? 0 : 16,
        alignItems: "center",
      }}
      onPress={() => {
        if (href) push(href);
      }}
    >
      <Image style={{ width, height }} source={source} />
      <Text style={{ fontSize: 8, fontWeight: "500", color: "#fff" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const Services = () => {
  return (
    <View
      style={{
        marginTop: 44,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 24,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#303733" }}>
          Tiện ích
        </Text>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <AntDesign name="right" size={20} color="#7D8FAB" />
        </TouchableOpacity>
      </View>
      <View style={{ display: "flex", paddingTop: 20 }}>
        <FlatList
          horizontal={true}
          style={{
            flexDirection: "row",
            marginHorizontal: 24,
          }}
          data={ServiceList}
          renderItem={({ item, index }) => {
            return <Service {...item} index={index} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Services;
