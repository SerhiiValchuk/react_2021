//Отримати всі пости з jsonplaceholder та вивести їх. до кожного поста зробити кнопку при натисканні якої виводиться біль детальна інформація про пост в середині Posts компоненти
import './App.css';
import Posts from "./components/posts/Posts";

export default function App() {
  return (
    <div>
      <h3>
        <Posts/>
      </h3>

    </div>
  );
}

