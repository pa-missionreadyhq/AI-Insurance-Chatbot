import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { GoogleGenerativeAI } from '@google/generative-ai'
import { Model } from './config.js'
import { PromptText } from './prompt.js'

const app = express()
app.use(cors())
app.use(express.json())

const port = 4000

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

app.post("/api/InsurancePolicyAssistantTool", async (req,res) =>
{
    try
    {
        const { history = [], userInput } = req.body

        const model = genAI.getGenerativeModel({ model: Model.aiModel })

        const systemMessage =
        {
            role: "user",
            parts:
            [
                {
                    text: PromptText
                }
            ]
        }
    
    const formattedHistory = 
    [
        systemMessage,
        ...history.map(message =>
        (
            {
                role: message.role === "AI" ? "model" : "user",
                parts: [{ text: message.content }]
            }
        )
        )
    ]

    const chat = model.startChat
    (
        {
            history: formattedHistory
        }
    )

    const result = await chat.sendMessage(userInput)
    const text = result.response.text()

    res.json({ reply: text })
    } catch (error)
    {
        console.error("Gemini error:", error)
        res.status(500).json({ error: error.message })
    }
})

app.listen(port, () =>
{
    console.log(`Server running on http://localhost:${port}`)
})