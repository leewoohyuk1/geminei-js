const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");


const genAI = new GoogleGenerativeAI("AIzaSyDu4WnHdcwdpmfwGbIpd34i01UAB3W1G_k");


function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType,
        },
    };
}

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "이 두 사진 에서 누가 엔비디아 ceo일까?";

    const imageParts = [
        fileToGenerativePart("a.png", "image/png"),
        fileToGenerativePart("b.png", "image/png"),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();