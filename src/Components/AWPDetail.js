import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import CompoundAPR from "./CompoundAPR";
import { ModalContainer, Modal } from "minimal-react-modal";
import Input from "./Input";

const Contenitore = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 0 5%;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 1% 5%;
    padding: 0;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 2% 80px 0;

  @media (max-width: 1000px) {
    padding: 0;
    margin: 0;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0 80px 2%;

  @media (max-width: 1000px) {
    padding: 0;
    margin: 10px 0 0 0;
    text-align: center;
  }
`;

const Title = styled.div`
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-big);
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: var(--text-ratherbig-mobile);
  }
`;

const Text = styled.div`
  text-align: center;
  font-family: var(--primary-font);
  color: var(--almost-black);
  font-size: var(--text-normal);
  font-weight: 300;
  padding: 0;
  line-height: 1.5rem;
  margin-bottom: 3%;

  @media (max-width: 768px) {
    font-size: var(--text-medium-mobile);
    padding: 0 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
  }
`;

const TokenLabel = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  @media (max-width: 768px) {
  }
`;

const TokenImage = styled.img`
  height: 30px;
  margin: 0 10px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const AWPDetail = props => {
  return (
    <Contenitore>
      <Left>
        <CompoundAPR />
      </Left>

      <Right>
        <Title>DeFi Lending is doomed</Title>
        <Text>
          The crypto basket, allocated for a maximum of 10%, aims to give
          exposure to different assets in the blockchain industry between:
        </Text>
        <ModalContainer>
          {(openModal, closeModal, isActive) => (
            <div>
              <button
                className="buttonModal"
                ButtonLabel="Buy Now"
                onClick={openModal}
              >
                Buy Now
              </button>{" "}
              <Modal
                className="mainModal"
                isActive={isActive} // required
                closeModal={closeModal} // required
                showAnimation={true}
                modalBoxStyle={{
                  width: "90%",
                  maxWidth: 600,
                  padding: "5%"
                }}
              >
                <Title>Buy PIE Tokens now</Title>
                <Text>
                  The crypto basket, allocated for a maximum of 10%, aims to
                  give exposure to different assets in the blockchain industry
                  between:
                </Text>
                <InputContainer>
                  <Input
                    inpPlaceholder="i.e. 1000"
                    inpType="number"
                    inpID="invest"
                  />
                  <TokenLabel>
                    <TokenImage
                      src="../img/dai.png"
                      alt="token icon"
                    />
                    DAI
                  </TokenLabel>
                </InputContainer>
                <InputContainer>
                  <Input
                    inpPlaceholder="675"
                    inpType="number"
                    inpID="invest"
                  />
                  <TokenLabel>
                    <TokenImage
                      src="../img/portfolio_02.png"
                      alt="token icon"
                    />
                    pAWP
                  </TokenLabel>
                </InputContainer>
                <PrimaryButton ButtonLabel="Connect Metamask" />
              </Modal>
            </div>
          )}
        </ModalContainer>
      </Right>
    </Contenitore>
  );
};

export default AWPDetail;
