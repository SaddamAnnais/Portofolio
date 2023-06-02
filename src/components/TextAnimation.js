import { useEffect, useState } from "react";

const TextAnimation = ({ text, start, finished }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shownText, setShownText] = useState("");
  const [hiddenText, setHiddenText] = useState(text);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex > text.length) {
          clearInterval(intervalId);
        }
        return prevIndex + 1;
      });
    }, 50);
    
  }, [start]);

  useEffect(() => {
    if (!start) return;
    if (currentIndex === text.length - 1 || done) {
      setDone(true);
      setShownText(text);
      setHiddenText("");
      finished();
      return;
    }

    setShownText(text.slice(0, currentIndex) + "█");
    setHiddenText("");
  }, [text, currentIndex, start]);

  return (
    <>
      <span style={{ opacity: 1 }}>{shownText}</span>
      <span style={{ opacity: 0 }}>{hiddenText}</span>
    </>
  );
};

export default TextAnimation;
