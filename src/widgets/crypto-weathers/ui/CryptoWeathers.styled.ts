import styled from "styled-components"
import { RainComponent } from "@/entities"
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
  justify-content: center;
  align-items: end;
`

export const PanelMood = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
`

export const PanelMoodItem = styled.div`
  max-width: 100px;
  width: 100%;
  padding: 0.2rem 0.5rem;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.33) 4px 8px 5px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 700;
  color: white;
  background: rgba(30, 35, 49, 0.9);
`
