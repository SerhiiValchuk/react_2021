// Створити компонент для того, щоб  відобразити кожного персонажа
//let{name,surname,age,info,photo} = props;
import './Simpsons.css'

export default function Simpsons({name, surname, age, info, photo}) {
    let classNameTitle = 'simpsons'
    return (
        <div className={classNameTitle}>
            <h2>{name}</h2>
            <h2>{surname}</h2>
            <h3> Вік {age} р.</h3>
            <h4>{info}</h4>
            <img src={photo} alt="personage"/>
            <hr/>
        </div>
    );
}