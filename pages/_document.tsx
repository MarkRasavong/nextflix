import Document, { Head, Main, Html, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main></Main> {/* needed for next.js => adds div with id of _next */}
        <NextScript />  {/* needed for next.js to run scripts in the html*/}
      </body>
    </Html>
  }
}

export default MyDocument;