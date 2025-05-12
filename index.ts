// Интерфейс
interface Currencies {
    usa: "usd";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
}

// Generic type
type CreateCustomCurr<T> = {
    // Важно: Используется отображение типов с переименованием ключей (as). Для каждого ключа P создаётся новый ключ с префиксом `custom` и капитализированным именем (например, `usa` → `customUsa`). `string & P` гарантирует, что P воспринимается как строка для Capitalize.
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type CustomCurrencies = CreateCustomCurr<Currencies>;

// Union - Типы анимаций
type MyAnimation = "fade" | "swipe";
type Direction = "in" | "out";

// Важно: Шаблонные строковые типы комбинируют значения MyAnimation и Direction. Capitalize делает первую букву Direction заглавной, создавая типы вроде `fadeIn`, `fadeOut`, `swipeIn`, `swipeOut`.
type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
