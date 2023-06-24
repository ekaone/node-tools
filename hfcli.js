import prompts from "prompts";
import { HfInference } from "@huggingface/inference";
import chalk from "chalk";
import "dotenv/config";

const hf = new HfInference(process.env.HUGGINGFACE_API_TOKEN);

const taskList = [
  {
    title: "Text Generation",
    value: "text-generation",
    description: chalk.yellow("Generate text from a prompt"),
  },
  {
    title: "Summarization",
    value: "summarization",
    description: chalk.yellow("Summarize text"),
  },
];

const listModel = [
  {
    title: "gpt2",
    value: "gpt2",
    description: chalk.yellow(
      "GPT-2 is a transformers model pretrained on a very large corpus of English data in a self-supervised fashion"
    ),
  },
  {
    title: "bigscience/bloom-560m",
    value: "bigscience/bloom-560m",
    description: chalk.yellow(
      "BigScience Large Open-science Open-access Multilingual Language Model"
    ),
  },
];

const questions = [
  {
    type: "select",
    name: "task",
    message: "Select tasks",
    choices: taskList,
  },
  {
    type: "select",
    name: "model",
    message: "Pick a model",
    choices: listModel,
  },
];

(async () => {
  const output = await prompts(questions);

  switch (output.task) {
    case "text-generation":
      await hf
        .textGeneration({
          model: output.model,
          inputs: "what is coke?",
        })
        .then((response) => {
          console.log(chalk.green(response.generated_text));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case "summarization":
      await hf.summarization({
        model: "facebook/bart-large-cnn",
        inputs:
          "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930.",
        parameters: {
          max_length: 100,
        },
      });

      console.log(output.model + " " + output.task);
      break;
    default:
      console.log("No task selected");
  }
})();
