# Componente Table

Proyecto en [Next.js](https://nextjs.org) que contiene un componente `Table` reutilizable, construido con React y Tailwind CSS. El componente permite mostrar datos tabulares de forma dinámica, con soporte para columnas configurables, filas clickeables y acciones personalizadas por fila.

## ¿De qué va el repositorio?

Este repo sirve como implementación de referencia del componente `Table`. Incluye el componente principal ubicado en `src/components/molecules/Table.tsx` y una página de demostración en `app/page.tsx` donde se puede ver el componente en acción con datos de ejemplo.

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la demo.

## Uso del componente `Table`

```tsx
import { Table } from "@/src/components/molecules";

const columns = [
  { key: "name", label: "Nombre" },
  { key: "age", label: "Edad" },
  { key: "city", label: "Ciudad" },
];

const items = [
  { name: "Ana García", age: 28, city: "Madrid" },
  { name: "Luis Pérez", age: 34, city: "Barcelona" },
];

<Table
  columns={columns}
  items={items}
  onClick={(item) => console.log(item)}
  renderActions={(item) => (
    <button onClick={() => console.log("Editar", item)}>Editar</button>
  )}
/>;
```

### Props

| Prop            | Tipo                                                                      | Requerido | Descripción                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `columns`       | `Column[]`                                                                | ✅        | Define las columnas. Cada columna tiene `key` (campo del objeto) y `label` (encabezado visible).                                                                                                                                    |
| `items`         | `object[]`                                                                | ✅        | Array de objetos con los datos a mostrar. Los campos que no correspondan a ninguna columna se ignoran; los que falten muestran `...`.                                                                                               |
| `onClick`       | `(item) => void`                                                          | ❌        | Callback al hacer clic en una fila. Si se pasa, las filas se vuelven clickeables con cursor pointer.                                                                                                                                |
| `renderActions` | `(item) => ReactNode` o `{ label: string, actions: (item) => ReactNode }` | ❌        | Renderiza una columna de acciones al final de cada fila. Se puede pasar directamente una función o un objeto con `label` personalizado y `actions`. Los clics dentro de esta columna no propagan el evento de `onClick` de la fila. |

### Columna de acciones con label personalizado

```tsx
<Table
  columns={columns}
  items={items}
  renderActions={{
    label: "Opciones",
    actions: (item) => <button onClick={() => eliminar(item)}>Eliminar</button>,
  }}
/>
```
