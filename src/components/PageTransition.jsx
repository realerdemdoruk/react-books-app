import { domAnimation, LazyMotion, m } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default PageTransition;
