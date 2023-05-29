// const prompts = require("prompts");
// https://github.com/terkelg/prompts

import prompts from "prompts";

const questions = [
  {
    type: "text",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "number",
    name: "age",
    message: "How old are you?",
    validate: (value) => (value < 18 ? `Nightclub is 18+ only` : true),
  },
  {
    type: "select",
    name: "color",
    message: "Pick a color",
    choices: [
      {
        title: "Red",
        description: "This option has a description.",
        value: "#ff0000",
      },
      { title: "Green", value: "#00ff00" },
      { title: "Yellow", value: "#ffff00", disabled: true },
      { title: "Blue", value: "#0000ff" },
    ],
  },
  {
    type: "multiselect",
    name: "multicolor",
    message: "Pick colors",
    hint: false,
    choices: [
      {
        title: "Red",
        description: "This option has a description.",
        value: "#ff0000",
      },
      { title: "Green", value: "#00ff00" },
      { title: "Yellow", value: "#ffff00", disabled: true },
      { title: "Blue", value: "#0000ff" },
    ],
  },
];

(async () => {
  const response = await prompts(questions);

  console.log(response);
})();
