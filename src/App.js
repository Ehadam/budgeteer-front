import Card from './generic_components/Card';
import Header from './components/Header';
import TransactionList from './components/transactions/TransactionList';
import './App.scss';
import './support/generalStyles.scss';
import DatePicker from './components/date_picker/DatePicker';

export default function App() {
  const transactions = {
    '2021-09-11': [{
      date: '2021-09-11',
      payee: 'Purely Wholesome Farm',
      amount: 50,
      isExpense: true,
    }],
    '2021-09-10': [{
      date: '2021-09-10',
      payee: 'PatientKeeper',
      amount: 3600.32,
      isExpense: false,
    }]
  };

  return (
    <>
      <Header />
      <div className="mainBody">
        <DatePicker />
        <Card />
        <div className="transactionList">
          <TransactionList transactionsMap={transactions} />
        </div>
      </div>

      <div id="dialog-root"></div>
    </>
  );
}
