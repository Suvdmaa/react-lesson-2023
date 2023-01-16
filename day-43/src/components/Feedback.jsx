import { useState } from "react"

export default function FeedBackForm(){

  const [text, setTexts] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)


  async function handleSubmit(event) {
    event.preventDefault()
    setIsSending(true)
    await sendMessage(text)
    setIsSending(false)
    setIsSent(true)
  }

//   if (isSent) {
//     return <h1>Thanks for feedback</h1>
//   }

  function sendMessage(text) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <h1>Та текстээ оруулна уу?</h1>
//         <textarea
//           value={text}
//           rows="4"
//           cols="50"
//           disabled={isSending}
//           onChange={(e) => setTexts(e.target.value)}
//         >
//         </textarea>
//         <button onClick={sendMessage} type="submit">Send</button>
//       </form>
//       {isSending && <p>Sending...</p>}

//     </div>
//   )

return isSent ? (
    <h1>Thanks for feedback</h1> 
) : (
    <div className="App">
      <form onSubmit={handleSubmit}>
         <h1>Та текстээ оруулна уу?</h1>
         <textarea
          value={text}
          rows="4"
          cols="50"
          disabled={isSending}
          onChange={(e) => setTexts(e.target.value)}
        >
        </textarea>
        <button onClick={sendMessage} type="submit">Send</button>
      </form>
      {isSending && <p>Sending...</p>}

    </div>
)
}