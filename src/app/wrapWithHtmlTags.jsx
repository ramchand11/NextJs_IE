import ReactDOMServer from 'react-dom/server';
import React from 'react';

// A helper function to wrap the JSX component with HTML boilerplate tags
function wrapWithHtmlTags(Component, props) {
  const componentHtml = ReactDOMServer.renderToStaticMarkup(<Component {...props} />);

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Generated Page</title>
        <!-- You can dynamically set meta tags, styles, etc., here -->
      </head>
      <body>
        ${componentHtml}
      </body>
    </html>
  `;
}

export default wrapWithHtmlTags;
