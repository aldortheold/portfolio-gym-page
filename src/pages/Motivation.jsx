import Card from "../components/Card";

const athletes = [
    {
        name: "Дэвид Гоггинс",
        desc: "Бывший Морской Котик, ультра-атлет, икона ментальной стойкости.",
        img: "../public/images/goggins.jpg"
    },
    {
        name: "Кэмерон Хейнс",
        desc: "Охотник и ультра-атлет, пример неустанной работы.",
        img: "../public/images/hanes.jpg"
    },
    {
        name: "Ронни Коулмэн",
        desc: "8-кратный Мистер Олимпия, легенда бодибилдинга.",
        img: "../public/images/ronnie.png"
    },
    {
        name: "Уилл Теннисон",
        desc: "Фитнес-ютубер и наставник, всегда с юмором.",
        img: "../public/images/tennyson.png"
    },
    {
        name: "Элиуд Кипчоге",
        desc: "Рекордсмен марафона, символ дисциплины.",
        img: "../public/images/kipchoge.png"
    }
];

export default function Motivation() {
    return (
        <div className="container">
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                🚀 Мотивация
            </h1>
            <div className="grid grid-2">
                {athletes.map((a, i) => (
                    <Card key={i} title={a.name}>
                        <img
                            src={a.img}
                            alt={a.name}
                            style={{ width: "100%", borderRadius: "12px", marginBottom: "1rem" }}
                        />
                        <p>{a.desc}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}