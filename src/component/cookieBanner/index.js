import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { BlueButtonWrapper } from "../buttons";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import * as ga from "react-ga";

const StyledDiv = styled.div`
  color: rgb(56, 39, 39);
  background-color: rgb(240, 238, 233);
  position: fixed;
  flex-direction: column;
  max-width: 24em;
  padding: 2em;
  bottom: 1em;
  left: 1em;
  border-radius: 4px;
  z-index: 9999;
  margin-right: 20px;
  box-shadow: rgb(0 0 0 / 10%) -0.5px -1px 5px 5px;
  p {
    margin: 0;
  }
  a {
    color: #0025ff;
  }
  a:hover {
    color: #0025ff;
  }

  @media (max-width: 450px) {
    max-width: 100%;
    bottom: 6em;
    left: 0em;
    margin: 0px 32px;
  }
`;

const CookieBanner = () => {
  const [display, setDisplay] = useState("");

  const router = useRouter();

  // useEffect(() => {
  //   if (
  //     Cookies.get("uuid") == "" ||
  //     Cookies.get("uuid") == null ||
  //     Cookies.get("uuid") == undefined
  //   ) {
  //     setDisplay("block");
  //   } else {
  //     saveCookies();
  //   }
  // }, [router.events]);

  // const saveCookies = () => {
  //   const handleRouteChange = (url) => {
  //     ga.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // };

  useEffect(() => {
    if (
      Cookies.get("uuid") == "" ||
      Cookies.get("uuid") == null ||
      Cookies.get("uuid") == undefined
    ) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }, [display]);

  return (
    <StyledDiv style={{ display: display }}>
      <p style={{ marginBottom: 18 }}>
        We use cookies to improve your experience on our website. By closing this banner
        or interacting with our site, you acknowledge and agree to our.{" "}
        <Link href="/privacy_policy#cookies_policy">
          <a href="/privacy_policy#cookies_policy">Cookie Policy</a>
        </Link>
      </p>
      <BlueButtonWrapper
        width="100%"
        padding="18px 36px"
        backgroundColor="#0025FF"
        hoverBackgroundColor="rgb(240,238,233)"
        color="#fff"
        onClick={() => {
          Cookies.set("uuid", uuidv4());
          setDisplay("none");
        }}
      >
        Got it
      </BlueButtonWrapper>
    </StyledDiv>
  );
};

export default CookieBanner;
