import { Headers, Items } from "../../section/news";
import { Container } from "../../components";

const Products = () => {
  return (
    <Container scroll={true}>
      <Headers />
      <Items />
    </Container>
  );
};

export default Products;
