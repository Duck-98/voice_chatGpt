import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_CHAT_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const chatService = {
  callGpt: async (transcript: string) => {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      //   model: "text-davinci-003",

      messages: [{ role: "user", content: transcript || "안녕하세요!" }],
    });

    return response.data.choices[0]?.message?.content;
  },
};
