import React from "react";

const Marquee = () => {
  return (
    <marquee
      behavior="scroll"
      direction="left"
      scrollamount="10"
      className="bg-violet-900/40
      rounded-3xl mx-4 max-w-lg
      "
    >
      <a
        href="https://www.bvuniversity.edu.in/imed/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-[50px] text-white no-underline"
        
        onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
        onMouseOut={(e) => (e.target.style.textDecoration = "none")}
      >
        Visit our official website — IMED Bharati Vidyapeeth University
      </a>
    </marquee>
  );
};

export default Marquee;
