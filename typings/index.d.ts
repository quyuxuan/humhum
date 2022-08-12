declare interface Window {
  process:NodeJS.Process & {type:string|null}
}