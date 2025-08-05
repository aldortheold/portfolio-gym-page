import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/" className="nav-title" onClick={() => setOpen(false)}>
                🏋️‍♀️ Ваш Справочник По Тренировкам
            </Link>
            <button className="toggle-btn" onClick={() => setOpen(!open)}>
                ☰
            </button>
            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><Link to="/">💥 Сплиты</Link></li>
                <li><Link to="/diet">🍏 Питание</Link></li>
                <li><Link to="/motivation">🔥 Мотивация</Link></li>
            </ul>
        </nav>
    );
}