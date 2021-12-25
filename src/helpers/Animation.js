export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const appear = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 2,
    },
  },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 1.6,
    },
  },
};
