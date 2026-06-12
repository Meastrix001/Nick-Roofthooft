import { NextResponse, type NextRequest } from "next/server";
import { brand } from "@/theme/brand.config";

// The site has no unprefixed root — redirect "/" to the default language.
export function proxy(req: NextRequest) {
  return NextResponse.redirect(new URL(`/${brand.defaultLanguage}`, req.url));
}

export const config = { matcher: "/" };
