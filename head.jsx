import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>A warm and fuzzy society of thoughtful, social game players</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script
        type="text/javascript"
        src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
      />

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `

      window._dcq = window._dcq || [];
      window._dcs = window._dcs || {};
      window._dcs.account = '1277379';

      (function() {
        var dc = document.createElement('script');
        dc.type = 'text/javascript'; dc.async = true;
        dc.src = '//tag.getdrip.com/1277379.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(dc, s);
      })();
      `
        }}
      />
    </Head>
  </div>
);
