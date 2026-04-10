import { useState, useEffect } from 'react'
import styles from './App.module.css'
import { sendMessage } from './api.js'

function App()
{
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

useEffect(() =>
{
  setMessages([
    {
      role: "AI",
      content: "I'm Tina. I help you choose the right insurance policy. May I ask you a few personal questions to make sure I recommend the best policy for you?"
    }
  ])
}, [])

  const handleSend = async () =>
  {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input}

    const updatedHistory = [...messages, userMessage]

    setMessages(updatedHistory)
    setInput("")
    setLoading(true)

    try
    {
      const data = await sendMessage({
        history: updatedHistory,
        userInput: input
      })

      const aiMessage =
      {
        role: "AI",
        content: data.reply
      }

      setMessages([...updatedHistory, aiMessage])
    } catch (error)
    {
      console.error(error)
      alert(error.message)
    }
    setLoading(false)
  }

  return(
    <div className={styles.document}>
      <div className={styles.policyAssistantTool}>
        <h2 className={styles.title}>Tina - Your AI Insurance Policy Assistant</h2>

        <div className={styles.conversationHistory}>
          {messages.map((msg, i) =>
          {
            return (
              <div
              key={i}
              className={`${styles.message} ${msg.role === "user" ? styles.userMessage : styles.aiMessage}`}
              >
              <strong>{msg.role === "user" ? "You" : "AI"}</strong>
              <div>{msg.content}</div>
              </div>
            )
          })}

          {loading && (<em className={styles.loading}>Preparing response...</em>)}
        </div>

        <textarea
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your response..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

        <button
          onClick={handleSend}
          className={styles.sendInput}
        >
        Send Response
        </button>
      </div>
    </div>
  )
}

export default App