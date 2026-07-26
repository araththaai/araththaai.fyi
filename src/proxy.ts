import { auth } from "@/auth";

export default auth;

export const config = {
  // Protect admin routes
  matcher: ["/admin/:path*"],
};
