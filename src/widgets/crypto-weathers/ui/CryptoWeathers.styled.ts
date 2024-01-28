import styled from "styled-components"
import { Description } from "@/shared"

export const WrapCryptoWeathers = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 1.5rem;
`

export const WrapDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
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
  align-items: end;
  width: 100%;
  padding: 1.5rem;
`
