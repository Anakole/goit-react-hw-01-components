import { TransactionTable } from './Transaction.styled';
import { Section } from 'components/App/App.styled';

export default function TransactionHistory({ items }) {
  return (
    <Section>
      <TransactionTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </TransactionTable>
    </Section>
  );
}
