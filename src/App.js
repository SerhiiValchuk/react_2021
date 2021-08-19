//Отримати всі коментарі з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої виводиться біль детальна інформація про коментар в середині Comments компоненти
import './App.css';
import Comments from "./components/comments/Comments";

export default function App() {
  return (
    <div>
      <h4>
        <Comments/>
      </h4>

    </div>
  );
}

