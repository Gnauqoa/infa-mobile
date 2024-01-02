import { ScrollView, View } from "react-native";
import {
  AppBar,
  Carousel,
  Machines,
  SearchBar,
  Services,
} from "../section/home";

const Home = () => {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          paddingTop: 48,
          backgroundColor: "#fff",
          position: "relative",
          paddingBottom: 32,
        }}
      >
        <AppBar />
        <SearchBar />
        <Carousel />
        <Services />
        <Machines />
      </View>
    </ScrollView>
  );
};

export default Home;
