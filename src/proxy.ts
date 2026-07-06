import { auth } from "@/auth";

export default auth;

export const config = {
  // Only run middleware on the dashboard or protected routes
  matcher: ["/dashboard/:path*"],
};
