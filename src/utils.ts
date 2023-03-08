import craie from "craie";

export const green = (message: string) => craie.bgEmerald.roundL.white(message)
export const red = (message: string) => craie.roundL.bgRed.white(message)
export const blue = (message: string) => craie.roundR.bgBlue.white(message)
export const log = craie.log

export const injectScript = async (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.onload = resolve
    script.onerror = reject
    script.src = url
    document.body.appendChild(script)
    script.remove()
  })
}

export const injectCss = async (url) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.onload = resolve
    link.onerror = reject
    link.href = url
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  })
}
