/**
 * This context is used to keep track of the url from where
 * the exercise is linked, so we can go back from any quiz page
 * on close
 */

import React, { useState } from "react";

const UrlContext = React.createContext();

function UrlContextProvider(props) {
  const [url, setUrl] = useState("/");
  let value = { url, setUrl };

  return (
    <UrlContext.Provider value={value}>{props.children}</UrlContext.Provider>
  );
}
let UrlContextConsumer = UrlContext.Consumer;

export { UrlContext, UrlContextProvider, UrlContextConsumer };
