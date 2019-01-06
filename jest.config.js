module.exports = {
  "roots": [
    "<rootDir>/tests/"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>enzyme-react-setup.ts",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
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
