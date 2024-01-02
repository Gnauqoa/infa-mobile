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
    <ScrollView
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 48,
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <AppBar />
      <SearchBar />
      <Carousel />
      <Services />
      <Machines />
    </ScrollView>
  );
};

export default Home;
