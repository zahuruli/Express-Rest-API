const { v4: uuidv4 } = require("uuid");
const todos = [
  {
    id: uuidv4(),
    title: "Zahurul islam",
    desc: "ZZZZZzzzz",
    active: true,
    date: 1 / 2 / 1998,
  },
  {
    id: uuidv4(),
    title: "Zahangir islam",
    desc: "GGGGGGGGGG",
    active: true,
    date: 1 / 2 / 1988,
  },
];

module.exports = todos;
