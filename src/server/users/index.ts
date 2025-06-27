"use server";

import { USERS } from "@/data/dummy";
import { User } from "@/data/schema";
import { delay } from "@/lib/utils";

export async function getCurrentUser(): Promise<User | null> {
  // Simulate loading for 100 ms
  await delay(100);

  // Simulate a user object
  return USERS[0] || null;
}