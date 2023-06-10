import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>25/05/2023</td>
            </tr>
            <tr>
              <td width="50%">iPhone 14 Pro Max</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 9.800,00</PriceHighlight>
              </td>
              <td>Compra</td>
              <td>13/05/2023</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de app</td>
              <td>
                <PriceHighlight variant="income">R$ 10.500,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>19/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Freelance</td>
              <td>
                <PriceHighlight variant="income">R$ 2.500,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>15/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Macbook Pro</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 15.000,00
                </PriceHighlight>
              </td>
              <td>Compra</td>
              <td>18/03/2023</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de API</td>
              <td>
                <PriceHighlight variant="income">R$ 8.900,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>05/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
