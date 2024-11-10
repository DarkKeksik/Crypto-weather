import styled from "styled-components"
import { Description } from "@/shared"
import cryptoHouseImg from "./cryptoHouse.png"

export const WrapCryptoWeathers = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  min-height: 60vh;
  height: 100%;
`

export const WrapDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

export const DescriptionPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`

export const Title = styled.div`
  padding: 0.8rem;
  color: white;
  font-size: 1.8rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.625rem;
  font-weight: 700;
  letter-spacing: 1px;
`

/**
 * @TODO need syntax as to jsx later
 */
export const DescriptionCryptoWeather = styled(Description)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  background: unset;
  padding: 0 1rem;
  letter-spacing: 1px;
`

export const AlignRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  box-sizing: border-box;
`

export const CryptoHouseImg = styled.div`
  background-image: url(${cryptoHouseImg});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`

export const DescriptionsExtra = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: rgba(30, 35, 49, 0.9);
  border-radius: 5px;
`

export const DescriptionsExtraItem = styled.p`
  color: white;
  font-size: 1.1rem;
`
