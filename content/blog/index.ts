import type { Post } from "./types";
import whyIBuiltBronit from "./why-i-built-bronit";
import qrMenuToKitchen from "./qr-menu-to-kitchen";
import telegramAsAStaffTool from "./telegram-as-a-staff-tool";
import oneCodebaseSixProducts from "./one-codebase-six-products";

/** Newest first. Add a post by importing it here. */
export const posts: Post[] = [
  whyIBuiltBronit,
  qrMenuToKitchen,
  telegramAsAStaffTool,
  oneCodebaseSixProducts,
].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
