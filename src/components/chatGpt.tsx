import React, { useEffect } from "react";
import { Button } from "../App";
import { RxCross1 } from "react-icons/rx";
import { useVoice } from "../hooks/useVoice";
import { chatService } from "../service/chatService";

interface Props {
  transcript: string;
  listening: boolean;
  resetTranscript: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<any>>;
}

function ChatGPT({
  transcript,
  listening,
  resetTranscript,
  setLoading,
  message,
  setMessage,
}: Props) {
  const { speak, stopVoice } = useVoice();

  const callGpt = async () => {
    setLoading(true);
    const chat = await chatService.callGpt(transcript);
    setMessage(chat);
    setLoading(false);
  };

  const reset = () => {
    resetTranscript();
    setMessage("");
    stopVoice();
  };

  useEffect(() => {
    if (!listening) callGpt();
  }, [transcript, listening]);

  useEffect(() => {
    if (message) speak({ message, pitch: 0 });
  }, [message]);

  return (
    <Button onClick={reset}>
      <RxCross1 />
    </Button>
  );
}

export default ChatGPT;
