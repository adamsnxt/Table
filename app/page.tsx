"use client";
import { Table } from "@/src/components/molecules/";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const items = [
  { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Smith", age: 25, city: "Los Angeles" },
  { name: "Bob Johnson", age: 40, city: "Chicago" },
  { name: "John Doe", age: 30, city: "New York", country: "USA" },
  {
    name: "Jane Smith",
    age: 25,
    city: "Los Angeles",
    mail: "jane.smith@example.com",
  },
  { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Smith", age: 25, city: "Los Angeles" },
  { name: "Bob Johnson", age: 40, city: "Chicago" },
  { name: "John Doe", age: 30, city: "New York", country: "USA" },
  {
    name: "Jane Smith",
    age: 25,
    city: "Los Angeles",
    mail: "jane.smith@example.com",
  },
];

const columnsEJ = [
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "city", label: "City" },
  { key: "mail", label: "Mail" },
  { key: "country", label: "Country" },
];

export default function Home() {
  return (
    <div className="bg-background w-full min-h-screen overflow-y-auto flex items-center justify-center">
      <Table
        columns={columnsEJ}
        items={items}
        renderActions={{
          label: "Acciones",
          actions: (item) => (
            <>
              <button onClick={() => console.log(item)}>
                <MdModeEdit />
              </button>
              <button onClick={() => alert(`Eliminar ${item.name}`)}>
                <MdDelete className="text-red-600" />
              </button>
            </>
          ),
        }}
      />
    </div>
  );
}
