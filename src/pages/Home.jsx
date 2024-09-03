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
      <section>
        <article>
          <h1>Home page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga
            nostrum temporibus voluptate itaque quisquam minus, minima dolorum
            similique dolorem qui alias, quod voluptates ut eligendi, explicabo
            enim. Adipisci, natus?
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga
            nostrum temporibus voluptate itaque quisquam minus, minima dolorum
            similique dolorem qui alias, quod voluptates ut eligendi, explicabo
            enim. Adipisci, natus?
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga
            nostrum temporibus voluptate itaque quisquam minus, minima dolorum
            similique dolorem qui alias, quod voluptates ut eligendi, explicabo
            enim. Adipisci, natus?
          </p>
        </article>
        <article>
          <h1>Home page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga
            nostrum temporibus voluptate itaque quisquam minus, minima dolorum
            similique dolorem qui alias, quod voluptates ut eligendi, explicabo
            enim. Adipisci, natus?
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga
            nostrum temporibus voluptate itaque quisquam minus, minima dolorum
            similique dolorem qui alias, quod voluptates ut eligendi, explicabo
            enim. Adipisci, natus?
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga
            nostrum temporibus voluptate itaque quisquam minus, minima dolorum
            similique dolorem qui alias, quod voluptates ut eligendi, explicabo
            enim. Adipisci, natus?
          </p>
        </article>
        <article>
          <h1>Home page</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga
            nostrum temporibus voluptate itaque quisquam minus, minima dolorum
            similique dolorem qui alias, quod voluptates ut eligendi, explicabo
            enim. Adipisci, natus?
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga
            nostrum temporibus voluptate itaque quisquam minus, minima dolorum
            similique dolorem qui alias, quod voluptates ut eligendi, explicabo
            enim. Adipisci, natus?
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fuga
            nostrum temporibus voluptate itaque quisquam minus, minima dolorum
            similique dolorem qui alias, quod voluptates ut eligendi, explicabo
            enim. Adipisci, natus?
          </p>
        </article>
      </section>
    </div>
  );
};
