import * as dotenv from "dotenv";
import { createError } from "../error.js";
import OpenAI from "openai";

dotenv.config();

// Setup OpenAI API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Controller to generate Image
export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    console.log("prompt: ", prompt);

    // Call to the DALL·E 3 API
    const response = await openai.images.generate({
      model: "dall-e-3", // Specify DALL·E 3 model
      prompt,
      n: 1,
      size: "1024x1024", // Allowed sizes: 1024x1024, 1024x1792, 1792x1024
      response_format: "url", // Use "url" to get the image URL
    });

    console.log("response:", response);

    const image_url = response.data[0].url; // Access image URL from response
    res.status(200).json({ photo: image_url });
  } catch (error) {
    console.log("error: ", error);
    next(
      createError(
        error.status,
        error?.response?.data?.error.message || error.message
      )
    );
  }
};
