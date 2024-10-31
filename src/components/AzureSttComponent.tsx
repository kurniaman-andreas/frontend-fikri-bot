// src/components/AzureSttComponent.tsx
import React, { useEffect } from "react";
// import { SpeechSDK } from "microsoft-cognitiveservices-speech-sdk";
// import { MicrophoneIcon } from "@heroicons/react/24/outline";
import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";
// import * as SpeechSDK from "microsoft-cognitiveservices-speech-sdk";

const AzureSttComponent: React.FC = () => {
  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    const defaultMessage = document.createElement("p");
    defaultMessage.id = "default-message";
    defaultMessage.textContent = "Selamat Pagi";
    chatBox?.appendChild(defaultMessage);

    const micButton = document.getElementById("mic-btn");
    micButton?.addEventListener("click", async (event) => {
      event.preventDefault();

      const speechKey = "4d210f9e547840a7a9cc0a47784a3035"; // Ganti dengan kunci API Azure Speech Anda
      const serviceRegion = "southeastasia"; // Ganti dengan region Anda
      const apiKeyOpenAI = "224746b6ce8e4ddeac4a2a9442db5466"; // Ganti dengan kunci API OpenAI Anda
      const openAIEndpoint =
        "https://danie-m2lgughl-westeurope.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2024-08-01-preview";

      // Speech-to-Text (Azure Speech Recognition)
      const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
        speechKey,
        serviceRegion
      );
      speechConfig.speechRecognitionLanguage = "id-ID";
      const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      const recognizer = new SpeechSDK.SpeechRecognizer(
        speechConfig,
        audioConfig
      );

      const defaultMessageElement = document.getElementById("default-message");
      if (defaultMessageElement) {
        chatBox?.removeChild(defaultMessageElement); // Hapus pesan default
      }

      const listeningMessage = document.createElement("p");
      listeningMessage.textContent = "Mendengarkan...";
      chatBox?.appendChild(listeningMessage);

      recognizer.recognizeOnceAsync(async (result) => {
        if (result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
          const recognizedText = result.text;
          listeningMessage.textContent = `Anda: ${recognizedText}`;

          const previousMessages = chatBox?.querySelectorAll("p:not(#mic-btn)"); // Mengabaikan elemen tombol
          previousMessages?.forEach((msg) => chatBox?.removeChild(msg)); // Menghapus elemen yang ada

          const payload = {
            messages: [{ role: "user", content: recognizedText }],
          };

          const openAIResponse = await fetch(openAIEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "api-key": apiKeyOpenAI,
            },
            body: JSON.stringify(payload),
          });

          const openAIResult = await openAIResponse.json();
          const responseText = openAIResult.choices[0].message.content;

          const botMessage = document.createElement("p");
          botMessage.textContent = `Chatbot: ${responseText}`;
          chatBox?.appendChild(botMessage);

          const speechSynthesisConfig = SpeechSDK.SpeechConfig.fromSubscription(
            speechKey,
            serviceRegion
          );
          speechSynthesisConfig.speechSynthesisVoiceName = "id-ID-ArdiNeural";
          const audioOutputConfig =
            SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
          const synthesizer = new SpeechSDK.SpeechSynthesizer(
            speechSynthesisConfig,
            audioOutputConfig
          );

          synthesizer.speakTextAsync(responseText);
        } else {
          listeningMessage.textContent = "Tidak ada ucapan yang dikenali.";
        }
      });
    });
  }, []);

  return (
    <div>
      {/* <div
        id="chat-box"
        className="w-full max-w-xl h-32 overflow-y-auto p-2"
      ></div> */}
      {/* <div className="flex items-center justify-center fixed bottom-[40px]">
        <a href="#" id="mic-btn">
          <img src="/images/mic.png" alt="Microphone" />
        </a>
      </div> */}

      <div className="bg-white w-60 h-12 rounded-3xl flex items-center shadow-inner shadow-[#000000] justify-center fixed bottom-[80px] left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-[#555166]"></div>

        <div className="flex-1 text-center flex justify-center">
          <a href="#" id="mic-btn">
            <img
              src="/images/microphone.png"
              alt="Microphone"
              className="w-8"
            />
          </a>
        </div>

        <div className="flex-1 text-center flex justify-center">
          <img src="/images/keyboard.png" alt="Microphone" className="h-8" />
        </div>
      </div>
      {/* <div className="bg-white w-60 h-12 rounded-3xl flex items-center shadow-inner shadow-[#000000] justify-center fixed bottom-[40px] left-1/2 transform -translate-x-1/2">
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-[#555166]"></div>

        <div className="flex-1 text-center">
          <button
            id="mic-btn"
            className="w-full h-full flex items-center justify-center"
          >
            <img src="/images/mic.png" alt="Microphone" />
          </button>
        </div>

        <div className="flex-1 text-center"></div>
      </div> */}
    </div>
  );
};

export default AzureSttComponent;
