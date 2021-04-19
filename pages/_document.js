import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <a href={`https://vercel.com??utm_source=isektionen&utm_campaign=oss`}>
            <img src="/powered-by-vercel.svg" alt="Powered by Vercel" />
          </a>
          <NextScript />
        </body>
      </Html>
    )
  }
}
