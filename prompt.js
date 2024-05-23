const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDu4WnHdcwdpmfwGbIpd34i01UAB3W1G_k");

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });


    const prompt = "구광모가 누구야?";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();