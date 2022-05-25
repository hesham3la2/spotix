import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    const isEng = this.props.locale === 'en-US' ? true : false;

    return (
      <Html>
        <Head />
        <body dir={isEng ? 'ltr' : 'rtl'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
// class CustomDocument extends Document {
//     static async getInitialProps(ctx) {
//         let pageProps = null;

//         const originalRenderPage = ctx.renderPage;
//         ctx.renderPage = () =>
//             originalRenderPage({
//                 enhanceApp: (App) => (props) => {
//                     pageProps = props.pageProps;
//                     return <App {...props} />
//                 },
//                 enhanceComponent: (Component) => Component,
//             })

//         const initialProps = await Document.getInitialProps(ctx);
//         return { ...initialProps, pageProps }
//     }

//     render() {
//         const { pageProps } = this.props;

//         console.log("This is my page props:");
//         console.log(pageProps);

//         return (
//             <Html>
//                 <Head />
//                 <body>
//                     <Main />
//                     <NextScript />
//                 </body>
//             </Html>
//         )
//     }
// }

// export default CustomDocument;
