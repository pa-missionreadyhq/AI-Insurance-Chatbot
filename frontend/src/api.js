const url = "http://localhost:4000/api/InsurancePolicyAssistantTool"

export async function sendMessage(data)
{
    const response = await fetch(`${url}`,
    {
        method: "POST",
        headers:
        {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!response.ok)
    {
        throw new Error("Could not fetch AI response.")
    }

    const result = await response.json()

    return result
}