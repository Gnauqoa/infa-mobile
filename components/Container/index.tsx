import { ScrollView, ViewProps } from "react-native";
import styled from "styled-components/native";

const ViewStyled = styled.View({
  display: "flex",
  flex: 1,
  width: "100%",
  height: "100%",
  minHeight: "100%",
  paddingTop: 48,
  backgroundColor: "#fff",
  paddingBottom: 48,
  paddingHorizontal: 24,
  alignItems: "center",
});
const Container = ({
  children,
  scroll = true,
  ...props
}: ViewProps & { scroll?: boolean }) => {
  if (scroll)
    return (
      <ScrollView
        style={{
          backgroundColor: "#fff",
        }}
      >
        <ViewStyled {...props}>{children}</ViewStyled>
      </ScrollView>
    );
  return <ViewStyled {...props}>{children}</ViewStyled>;
};
export default Container;
