interface Props {
  message: string;
  pitch: number;
}

export const useVoice = () => {
  const speak = ({ message, pitch = 1 }: Props) => {
    // ai 답변을 소리로
    const voice = window.speechSynthesis;
    let voices = voice.getVoices();
    const utterThis = new SpeechSynthesisUtterance(message);
    utterThis.voice = voices[0];
    utterThis.pitch = pitch;
    voice.speak(utterThis);
  };

  const stopVoice = () => {
    // 음성 인식 중지
    const voice = window.speechSynthesis;
    voice.cancel();
  };

  return {
    speak,
    stopVoice,
  };
};
