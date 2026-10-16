import type { Tarefa } from "./tipo";

export const tarefas: Tarefa[] = [
  {
    id: 1,
    titulo: "Estudar interfaces",
    prioridade: "alta",
    status: "pendente",
    tags: ["estudo"],
    criadaEm: new Date(),
  },
  {
    id: 2,
    titulo: "Comprar café",
    prioridade: "alta",
    status: "em-andamento",
    tags: ["compras"],
    criadaEm: new Date(),
  },
  {
    id: 3,
    titulo: "Aula de Python",
    prioridade: "baixa",
    status: "pendente",
    tags: ["estudo"],
    criadaEm: new Date(),
  },
  {
    id: 4,
    titulo: "Praticar Typescriot",
    prioridade: "media",
    status: "em-andamento",
    tags: ["estudo"],
    criadaEm: new Date(),
  },
  {
    id: 5,
    titulo: "Revisar GIT",
    prioridade: "alta",
    status: "pendente",
    tags: ["estudo"],
    criadaEm: new Date(),
  },
];
