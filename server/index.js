const express = require("express");
const cors = require("cors");
const knowledgeBase = require("./knowledge/knowledgeBase");
const detectIntent = require("./ai");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("LAUTECH AI Chatbot Backend is Running!");
});

// CHATBOT ROUTE (Updated to handle /chat and /api/chat seamlessly)
const handleChat = (req, res) => {
    const { message } = req.body;
    const result = detectIntent(message);

    if (result) {
        return res.json({
            reply: result.answer
        });
    }

    res.json({
        reply: "Sorry, I don't have information on that yet. You can ask me about admissions, fees, cut-off marks, postgraduate programmes, hostel, JUPEB, ODL, CGPA and other LAUTECH enquiries."
    });
};

app.post("/chat", handleChat);
app.post("/api/chat", handleChat); 

const PORT = process.env.PORT || 5000;

// ONLY run app.listen locally (Vercel manages its own serverless listener)
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;