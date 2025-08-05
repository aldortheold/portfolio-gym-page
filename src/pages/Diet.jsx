import CalorieCalculator from "../components/CalorieCalculator";
import MealPlan from "../components/MealPlan";

const cutTargets  = [1500, 1800, 2100];
const bulkTargets = [2000, 2300, 2600, 2900, 3200];

export default function Diet() {
    return (
        <div className="container">
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                🥗 Подкрепи свои достижения!
            </h1>

            <h2>🔻 Дефицит (сброс жира)</h2>
            <CalorieCalculator mode="cut" />
            <h3>Примеры питания (дефицит)</h3>
            <div className="grid grid-2">
                {cutTargets.map(c => <MealPlan key={c} calories={c} />)}
            </div>

            <h2>🔺 Набор массы</h2>
            <CalorieCalculator mode="bulk" />
            <h3>Примеры питания (набор)</h3>
            <div className="grid grid-2">
                {bulkTargets.map(c => <MealPlan key={c} calories={c} />)}
            </div>
        </div>
    );
}