import { FlatList, View } from "react-native";
import NewItem, { NewsItem } from "../../components/NewItem";

const Items = () => {
  return (
    <View style={{ display: "flex", width: "100%", marginTop: 40 }}>
      {NewsItem.map((item) => (
        <View key={item.id} style={{ marginTop: 40 }}>
          <NewItem {...item} />
        </View>
      ))}
    </View>
  );
};

export default Items;
