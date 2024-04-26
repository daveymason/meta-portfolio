module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom', // This line should reference the installed package
  };
  