import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    console.log("Home page has mounted");

    let t = 0;
    let timer = setInterval(() => {
      console.log("Time elapsed on home page", (t += 1), "seconds");
    }, 1000);

    return () => {
      console.log("Home page has dismounted");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};
