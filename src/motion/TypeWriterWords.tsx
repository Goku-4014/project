import React, { useState, useEffect } from 'react';

interface Props {
  text: string;
  words: string[];
  delay?: number;
}

export const TypewriterWords: React.FC<Props> = ({
  text,
  words,
  delay = 2000
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: any;

    if (typing) {
      if (displayedText.length < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(words[wordIndex].slice(0, displayedText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => setTyping(false), delay);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayedText('');
        setTyping(true);
        setWordIndex((wordIndex + 1) % words.length);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, wordIndex, words, delay]);

  return (
    <div className="inline-block">
      <span className="text-gray-300">{text} </span>
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        {displayedText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};
