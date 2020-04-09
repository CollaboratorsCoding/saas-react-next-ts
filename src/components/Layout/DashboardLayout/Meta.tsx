import React from 'react';
import Head from 'next/head';

function Meta() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap"
        rel="stylesheet"
      />
      {/* <link rel="stylesheet" type="text/css" href="/nprogress.css" /> */}
      {/* <script src="https://js.stripe.com/v3/" /> */}
      <title>Dashboard Title</title>
    </Head>
  );
}

export default Meta;
