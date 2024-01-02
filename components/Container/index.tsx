import { ReactNode } from "react";
import { ScrollView, ViewProps } from "react-native";
import styled from "styled-components/native";

const ViewStyled = styled.View({
  display: "flex",
  flex: 1,
  width: "100%",
  height: "100%",
  minHeight: "100%",
  paddingTop: 48,
  paddingBottom: 48,
  paddingHorizontal: 24,
  backgroundColor: "#fff",
  alignItems: "centers",
});
const Container = ({ children, ...props }: ViewProps) => {
  return (
    <ScrollView>
      <ViewStyled {...props}>{children}</ViewStyled>
    </ScrollView>
  );
};
export default Container;
