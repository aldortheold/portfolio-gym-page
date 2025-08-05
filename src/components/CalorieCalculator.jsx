import { useState } from "react";

export default function CalorieCalculator({ mode }) {
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState(25);
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(175);
    const [activity, setActivity] = useState(1.2);

    const bmr = Math.round(
        gender === "male"
            ? 10 * weight + 6.25 * height - 5 * age + 5
            : 10 * weight + 6.25 * height - 5 * age - 161
    );
    const maintenance = Math.round(bmr * activity);
    const goalCal = mode === "cut" ? maintenance - 500 : maintenance + 300;

    return (
        <div className="card">
            <div>
                <select value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
                <input type="number" value={age} onChange={e => setAge(+e.target.value)} /> лет
            </div>
            <div>
                <input type="number" value={weight} onChange={e => setWeight(+e.target.value)} /> кг
                <input type="number" value={height} onChange={e => setHeight(+e.target.value)} /> см
            </div>
            <div>
                <label>Активность:</label>
                <select value={activity} onChange={e => setActivity(+e.target.value)}>
                    <option value={1.2}>Малоподвижный</option>
                    <option value={1.375}>Легкий</option>
                    <option value={1.55}>Умеренный</option>
                    <option value={1.725}>Высокий</option>
                    <option value={1.9}>Спортивный</option>
                </select>
            </div>
            <hr />
            <p>ПБМ: {bmr} ккал</p>
            <p>Поддержание: {maintenance} ккал</p>
            <p>
                <strong>
                    {mode === "cut" ? "Цель (дефицит)" : "Цель (набор)"}: {goalCal} ккал
                </strong>
            </p>
        </div>
    );
}