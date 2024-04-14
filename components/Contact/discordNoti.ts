
export const sendDiscordNotification = (message: string) => {
    const webhookUrl = "https://discord.com/api/webhooks/1229065375459708928/iPo3dAI8QJap9TI7RHv9RcclJRwMNza7ILyRIuaUsAc6Osv2pU_wTYaB1yzwjI2n60wR";
    const payload = {
        content: message,
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (!response.ok) {
                console.error("Failing:", response.status);
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
