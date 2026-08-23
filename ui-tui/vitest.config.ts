import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: ['dist/**', 'node_modules/**'],
    // Timer-driven renderer tests share process-level mocks and become flaky
    // when 159 files compete for the four-core hosted runner.
    fileParallelism: false
  }
})
