const { readdirSync, statSync, existsSync } = require("fs")

const CommonScopes = ["root", "*"]
const PackagesDir = "./packages"

if (!existsSync(PackagesDir)) {
  exports.scopes = CommonScopes
  return
}

const dir2path = (dir) => `${PackagesDir}/${dir}`
const isDir = (path) => statSync(path).isDirectory()
const path2dir = (path) => path.replace(`${PackagesDir}/`, "")
const packages = readdirSync(PackagesDir)
  .map(dir2path)
  .filter(isDir)
  .map(path2dir)

exports.scopes = [...CommonScopes, ...packages]
