const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
        <div>
          <h3>Trang House</h3>
          <p style="text-align: center";>${survey.body}</p>
        </div>
      </body>
    </html>
  `;
};
