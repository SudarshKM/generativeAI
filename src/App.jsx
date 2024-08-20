import React, { useState } from "react";
// import dotenv from 'dotenv'
import { GoogleGenerativeAI } from "@google/generative-ai";
// dotenv.config()
function App() {
  const [prompt, setPrompt] = useState("");

  const [data, setData] = useState("");

  const ai = new GoogleGenerativeAI("AIzaSyAbO3cTdjP4W7juhOMoXIKe1l5KileQN4M");

  const model = ai.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const chat = async () => {
    const result = await model.generateContent(prompt);

    setData(result.response.text());
    // setPrompt("")
    console.log(data);
  };
  return (
    <> 
      <div className="p-5">
        <div className="p-1">{prompt}</div>
        <div className="p-1 text-secondary" >{data}</div>
      </div>
      <div className="d-flex flex-row fixed-bottom">
        <input
          type="text"
          className="form-control m-3"
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="type prompt"
          value={prompt}
        />
        <button className="btn btn-dark my-3 me-3" onClick={chat}>
          enter
        </button>
      </div>
    </>
  );
}

export default App;
