//Отримати всі user з jsonplaceholder та вивести їх. до кожного user зробити кнопку при натисканні якої виводиться всі пости поточного юзера в межах Users компоненти

import './App.css';
import Users from "./components/users/Users";

export default function App() {
  return (
      <div>
        <h1>
          <Users/>
        </h1>
      </div>
  );
}

