import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.523,45</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 9.825,75</strong>
      </SummaryCard>

      <SummaryCard variant="positive">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 147.726,80</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
