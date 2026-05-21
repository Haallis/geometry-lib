# geometry-lib

TypeScript-библиотека для работы с геометрическими фигурами: прямоугольник, треугольник, круг.

## Установка

```bash
git clone https://github.com/<username>/geometry-lib.git
cd geometry-lib
npm install
npm run build
```

## Подключение

```ts
import { Rectangle, Triangle, Circle } from "./dist/index.js";
```

Или при использовании в TypeScript-проекте с настроенным `paths`:

```ts
import { Rectangle, Triangle, Circle } from "geometry-lib";
```

## API

### Rectangle

```ts
const rect = new Rectangle(10, 5);

rect.width; // 10
rect.height; // 5
rect.getArea(); // 50
rect.getPerimeter(); // 30
rect.getParams(); // { width: 10, height: 5 }
rect.toString(); // "Rectangle(10 × 5)"

// Изменение параметров
rect.width = 20;
```

### Triangle

```ts
const tri = new Triangle(3, 4, 5);

tri.a; // 3
tri.b; // 4
tri.c; // 5
tri.getArea(); // 6
tri.getPerimeter(); // 12
tri.getParams(); // { a: 3, b: 4, c: 5 }
tri.toString(); // "Triangle(3, 4, 5)"
```

### Circle

```ts
const circle = new Circle(7);

circle.radius; // 7
circle.getDiameter(); // 14
circle.getArea(); // ~153.94
circle.getPerimeter(); // ~43.98
circle.getParams(); // { radius: 7 }
circle.toString(); // "Circle(r=7)"
```

### События (EventTarget)

Каждая фигура расширяет `EventTarget`. При изменении параметра через сеттер генерируется событие `paramchange`:

```ts
const rect = new Rectangle(10, 5);

rect.on("paramchange", (event) => {
  console.log(event.detail);
  // { param: "width", oldValue: 10, newValue: 20 }
});

rect.width = 20; // → срабатывает обработчик
```

Методы подписки:

- `shape.on(type, listener)` — подписаться
- `shape.off(type, listener)` — отписаться
- Также доступны стандартные `addEventListener` / `removeEventListener`

## Расширение библиотеки

Для добавления новой фигуры создайте класс, расширяющий `Shape`:

```ts
import { Shape } from "./shapes/Shape.js";
import { ShapeType } from "./types.js";

export class Trapezoid extends Shape {
  readonly type: ShapeType = "trapezoid"; // добавить в ShapeType union

  // Реализовать абстрактные методы:
  getParams() {
    /* ... */
  }
  getArea() {
    /* ... */
  }
  getPerimeter() {
    /* ... */
  }
  toString() {
    /* ... */
  }
}
```

Существующий код менять не нужно (кроме добавления нового типа в `ShapeType` и экспорта в `index.ts`).

## Скрипты

| Команда               | Описание                            |
| --------------------- | ----------------------------------- |
| `npm run build`       | Компиляция в `dist/`                |
| `npm run build:check` | Проверка типов без генерации файлов |
| `npm run dev`         | Режим наблюдения (watch)            |

## Требования

- Node.js не старее 18
- TypeScript не старее 5

