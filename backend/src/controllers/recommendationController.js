const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getRecommendations = async (req, res) => {
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ message: "Query is required" });
    }

    try {
        const response = await openai.completions.create({
            model: "gpt-4",
            prompt: `Give me tech recommendations for: ${query}`,
            max_tokens: 100
        });

        res.json({ recommendations: response.choices[0].text.trim().split("\n") });
    } catch (error) {
        res.status(500).json({ message: "AI API Error", error });
    }
};

module.exports = { getRecommendations };
