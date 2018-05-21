import fs from "fs";
import { execSync } from "child_process";
import { CLIENT_DIR } from "./constants";

const FILE_PATH = `${CLIENT_DIR}/src/toFormat.js`;

beforeAll(() => {
  fs.writeFileSync(FILE_PATH, `const hello = "Hello";`);
});

it("should pass", () => {
  execSync("npx dudejs format", { cwd: CLIENT_DIR });
  const output = fs.readFileSync(FILE_PATH);

  expect(output.toString()).toBe(`const hello = 'Hello'\n`);
});
