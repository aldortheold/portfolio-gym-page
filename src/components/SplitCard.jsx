import Card from "./Card";

export default function SplitCard({ split }) {
    return (
        <Card title={`🏋️‍♂️ ${split.name}`}>
            <p><em>{split.goal}</em></p>
            <p><strong>Неделя:</strong></p>
            <ul>
                {split.week.map((day, i) => <li key={i}>{day}</li>)}
            </ul>
            {Object.entries(split.examples).map(([day, ex], i) => (
                <div key={i}>
                    <p><strong>{day} — примеры:</strong></p>
                    <ul>
                        {ex.map((e, j) => <li key={j}>{e}</li>)}
                    </ul>
                </div>
            ))}
        </Card>
    );
}