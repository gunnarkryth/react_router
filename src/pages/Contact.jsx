import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    console.log("Contact page has mounted");

    // let t = 0;
    // let timer = setInterval(() => {
    //   console.log("Time elapsed on Contact page", (t += 1), "seconds");
    // }, 1000);

    return () => {
      console.log("Contact page has dismounted");
      // clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Contact page</h1>
    </div>
  );
};
