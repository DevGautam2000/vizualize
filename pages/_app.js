import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import "../styles/globals.css";
import Head from "next/head";
import Context from "../context/context";

function MyApp({ Component, pageProps }) {
  const [visible, setvisible] = useState(false);

  // parent
  const [dimensions, setdimensions] = useState({
    height: "200px",
    width: "200px",
  });
  const [p_position, setp_position] = useState("static");
  const [p_tblr, setp_tblr] = useState({ t: 0, b: 0, l: 0, r: 0 });
  const [pBackground, setpBackground] = useState("#ff6347");
  const [cBackground, setcBackground] = useState("#40e0d0");
  const [p_display, setp_display] = useState({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  //Child
  const [childDimensions, setChildDimensions] = useState({
    height: "100px",
    width: "100px",
  });
  const [c_position, setc_position] = useState("static");
  const [c_tblr, setc_tblr] = useState({ t: 0, b: 0, l: 0, r: 0 });
  const [c_display, setc_display] = useState({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const values = {
    dimensions,
    setdimensions,
    setChildDimensions,
    childDimensions,
    p_position,
    setp_position,
    c_position,
    setc_position,
    p_tblr,
    setp_tblr,
    c_tblr,
    setc_tblr,
    p_display,
    setp_display,
    c_display,
    setc_display,
    pBackground,
    setpBackground,
    cBackground,
    setcBackground,
  };

  useEffect(() => {
    const effect = () => {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 1200) {
          setvisible(() => true);
        } else {
          setvisible(() => false);
        }
      });
    };
    return effect();
  }, []);
  return (
    <>
      {!visible ? (
        <>
          <Context.Provider value={values}>
            <Head>
              <title>Vizualize | Home</title>
              <link rel="shortcut icon" href="/visualize.svg" />
            </Head>
            <Component {...pageProps} />
            <Footer />
          </Context.Provider>
        </>
      ) : (
        <div className="app_hidden">page is restricted for mobile view</div>
      )}
    </>
  );
}

export default MyApp;
