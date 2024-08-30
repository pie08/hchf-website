import { promises as fs } from "fs";

async function getRelativeDirFilePaths(relativePath: string) {
  const fullPath = process.cwd() + relativePath;
  const fileList = await fs.readdir(fullPath);
  const output: string[] = [];
  fileList.forEach((file) =>
    output.push(relativePath.replace("/public", "") + "/" + file)
  );
  return output;
}

export default getRelativeDirFilePaths;
