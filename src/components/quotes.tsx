import { useEffect, useRef, useState } from "react";
import quotes from "../assets/verses.json";

interface QuoteType {
  chapter: number;
  verse: number;
  text: string;
}

interface QuotesProps {
  quoteClassName?: string;
  verseClassName?: string;
}

function Quotes({ quoteClassName, verseClassName }: QuotesProps) {
  const rand = useRef(Math.floor(Math.random() * quotes.length));

  const [divClass, setDivClass] = useState<string>(
    "animate-in fade-in duration-700"
  );
  const [currentQuote, setCurrentQuote] = useState<QuoteType>(
    quotes[rand.current]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDivClass("animate-out fade-out duration-700");

      setTimeout(() => {
        setDivClass("animate-in fade-in duration-700");

        // Generate a random quote
        rand.current = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[rand.current]);
      }, 500);
    }, 8000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={divClass}>
      <i>
        <p className={`${quoteClassName? quoteClassName : "text-xl md:text-2xl"}`}>{currentQuote.text}</p>
        <p className={`${verseClassName? verseClassName: "text-lg md:text-xl"}`}>
          Proverbs {currentQuote.chapter}:{currentQuote.verse}
        </p>
      </i>
    </div>
  );
}

export default Quotes;
