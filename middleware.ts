export { default } from "next-auth/middleware"

export const config = { matcher: [
    "/settings",
    "/messages",
    "/notifications",
    /*
    * Find Not Selector
    */
]};