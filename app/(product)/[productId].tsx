import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

const Product = () => {
  const go = useLocalSearchParams();
  const [amount, setAmount] = useState(0);
  const productImage = require("../../assets/images/product-image.png");
  const { replace } = useRouter();
  useEffect(() => {
    console.log(go);
  }, [go]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Container>
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{ position: "absolute", top: 20, left: 20, zIndex: 30 }}
            onPress={() => replace("/home")}
          >
            <AntDesign name="arrowleft" size={26} color={"black"} />
          </TouchableOpacity>
          <Image
            style={{
              height: 500,
              width: 500,
            }}
            source={productImage}
          />
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <ProductContainer>
            <ProductTitle>Cánh tay Robot</ProductTitle>
            <IconContainer>
              <Touchable>
                <AntDesign
                  style={{
                    paddingHorizontal: 15,
                  }}
                  name="hearto"
                  size={24}
                  color="#01b764"
                />
              </Touchable>
              <Touchable>
                <FontAwesome name="commenting-o" size={24} color="#01b764" />
              </Touchable>
            </IconContainer>
          </ProductContainer>
          <InfoContainer>
            <ButtonSalled>
              <SaleText>20 Đã bán</SaleText>
            </ButtonSalled>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <AntDesign name="star" size={24} color="#01b764" />
              <RattingText>5.0 (10 đánh giá)</RattingText>
            </View>
          </InfoContainer>
          <ContentContainer>
            <ContentTitle>Mô tả</ContentTitle>
            <ContentText>
              Những cánh tay robot được lập trình và sử dụng để thực hiện các
              nhiệm vụ cụ thể. Nó sẽ phải tuân thủ các nguyên tắc cử động giống
              như cánh tay con người. Các khớp tay
            </ContentText>
          </ContentContainer>
          <AmountContainer>
            <ContentTitle>Số lượng</ContentTitle>
            <AmountContainerInput>
              <Touchable>
                <AntDesign
                  onPress={() => setAmount(amount + 1)}
                  name="plus"
                  size={20}
                  color="#01b764"
                />
              </Touchable>
              <SaleText>{amount}</SaleText>
              <Touchable>
                <Feather
                  onPress={() => {
                    if (amount > 0) {
                      setAmount(amount - 1);
                    }
                  }}
                  name="minus"
                  size={20}
                  color="#01b764"
                />
              </Touchable>
            </AmountContainerInput>
          </AmountContainer>
          <StyledButton>
            <MaterialCommunityIcons
              name="purse-outline"
              size={24}
              color="white"
            />
            <PurchaseTitle>Tiến hành đặt hàng</PurchaseTitle>
          </StyledButton>
        </View>
      </Container>
    </SafeAreaView>
  );
};
const Container = styled.ScrollView``;

const Touchable = styled.TouchableOpacity`
  z-index: 10;
  border-radius: 10px;
`;
const ProductTitle = styled.Text`
  font-size: 27px;
  font-weight: 700;
`;
const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
  padding-vertical: 20px;
  justify-content: space-between;
`;
const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const InfoContainer = styled.View`
  padding-horizontal: 20px;
  padding-vertical: 20px;
  flex-direction: row;
`;
const ButtonSalled = styled.View`
  background-color: #ebf9f4;
  height: 30px;
  padding-vertical: 5px;
  border-radius: 5px;
  margin-right: 40px;
`;
const SaleText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #01b764;
  padding-horizontal: 5px;
`;
const RattingText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  padding-horizontal: 5px;
`;
const ContentContainer = styled.View`
  margin-horizontal: 20px;
  border-top-width: 1px;
  border-color: #f2f2f2;
`;
const ContentTitle = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-top: 20px;
  margin-right: 30px;
`;
const ContentText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  padding-vertical: 10px;
`;
const AmountContainer = styled.View`
  margin-horizontal: 20px;
  flex-direction: row;
  align-items: center;
`;
const AmountContainerInput = styled.View`
  padding-horizontal: 20px;
  margin-right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  height: 50px;
  width: 120px;
  border-radius: 25px;
  margin-top: 15px;
`;
const StyledButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #02b763;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-horizontal: 20px;
  justify-content: center;
  border-radius: 30px;
`;
const PurchaseTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;
export default Product;
