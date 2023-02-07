#### Приложение показывает маршрут движения от точки А к точке Б. Слева в таблице можно выбрать маршрут, справа на карте отрисуется полилиния.

#### Стек

- React, Redux, Redux-Saga, Typescript
- **Доп. пакеты:** Leaflet (Карта), Ant Design (библиотека компонентов)

#### Структура проекта

```
├── App.tsx        # Точка входа
└── src
    ├── components # UI компоненты
    ├── services   # http запросы
    ├── hooks      # кастомные хуки
    └── store      # redux-хранилище
```

#### Запуск

```
устанавливаем зависимости
1. npm install

запускаем
2. npm start
```

#### Запуск через docker

```
создаем образ с именем transport-orders и тегом dev
1. docker build -t transport-orders:dev .

включаем контейнер в фоновом режиме на 3000 порту
2. docker run --name my-name-transport-orders -d -p 3000:3000 transport-orders:dev
```
