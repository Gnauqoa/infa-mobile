import { FlatList, View } from "react-native";
import NewItem, { NewsItem } from "../../components/NewItem";
import { useContext } from "react";
import NewsContext, { NewsContextType } from "../../context/New";

const Items = () => {
  const { items } = useContext(NewsContext) as NewsContextType;
  return (
    <View style={{ display: "flex", width: "100%", marginTop: 40 }}>
      {items.map((item) => (
        <View key={item.id} style={{ marginTop: 40 }}>
          <NewItem {...item} />
        </View>
      ))}
    </View>
  );
};

export default Items;
