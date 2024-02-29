import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wordVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const charVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const TypewriterEffect = ({ words }: { words: any[] }) => {
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState([]);

  useEffect(() => {
    setChars(words[index].text.split(""));
  }, [index, words]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [words]);

  return (
    <div className="flex space-x-1 text-5xl text-blue-500 text-center py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={wordVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="overflow-hidden pb-2"
          style={{ width: "fit-content" }}
        >
          {chars.map((char, charIndex) => (
            <motion.span
              key={`char-${charIndex}`}
              variants={charVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: charIndex * 0.1 }}
              className="text-blue-500"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
