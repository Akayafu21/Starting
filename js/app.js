await liff.init({ liffId: "1657437132-1lXb9k9o" })

async function sendMsg() {
    if (liff.getContext().type !== "none" && liff.getContext().type !== "external") {
      await liff.sendMessages([
        {
          "type": "text",
          "text": "This message was sent by sendMessages()"
        }
      ])
      alert("Message sent")
    }
  }
  keepbut.onclick = () => {
    sendMsg()
  }