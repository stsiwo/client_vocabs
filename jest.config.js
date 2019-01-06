module.exports = {
  "roots": [
    "<rootDir>/tests/"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>enzyme-react-setup.ts",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "moduleNameMapper": {
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
  "testRegex": "\\.(spec|test)\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
}
