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

// CHATBOT ROUTE
app.post("/chat", (req, res) => {

    const { message } = req.body;

    const result = detectIntent(message);

    if (result) {

        return res.json({
            reply: result.answer
        });

    }

    res.json({

        reply:
        "Sorry, I don't have information on that yet. You can ask me about admissions, fees, cut-off marks, postgraduate programmes, hostel, JUPEB, ODL, CGPA and other LAUTECH enquiries."

    });

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});