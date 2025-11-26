export default {
  preset: 'ts-jest/presets/default-esm', // Usa o preset para ESM
  testEnvironment: 'node',
  // Adicione esta linha para tratar arquivos TS como módulos
  extensionsToTreatAsEsm: ['.ts'], 
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Mapeia imports .js para arquivos .ts
  },
  transform: {
    // Configuração específica do ts-jest
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true, // Ativa o modo ESM no ts-jest
      },
    ],
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"]
};