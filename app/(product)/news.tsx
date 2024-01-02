import { Headers, Items } from "../../section/news";
import { Container } from "../../components";

const Products = () => {
  return (
    <Container style={{ flexDirection: "column", flex: 1, width: "100%" }}>
      <Headers />
      <Items />
    </Container>
  );
};

export default Products;
