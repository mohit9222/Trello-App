export const colors = [
  "#a8193d",
  "#4fcc25",
  "#1ebffa",
  "#8da377",
  "#9975bd",
  "#cf61a1",
  "#240959",
];

export const dummy = [
  {
    id: Date.now() + Math.random() * 2,
    title: "To do",
    cards: [
      {
        id: Date.now() + Math.random(),
        title: "Card 1",
        tasks: [],
        labels: [
          {
            text: "frontend",
            color: "blue",
          },
        ],
        desc: "Some Random cards",
        date: "",
      },
      {
        id: Date.now() + Math.random(),
        title: "Card 2",
        tasks: [],
        labels: [
          {
            text: "backend",
            color: "red",
          },
        ],
        desc: "Some Random cards",
        date: "",
      },
    ],
  },
];
