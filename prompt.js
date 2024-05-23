const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("api_key");

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });


    const prompt = "구광모가 누구야?";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();