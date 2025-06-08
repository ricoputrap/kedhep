"use server";

import { USERS } from "@/data/dummy";

interface Profile {
  initials: string;
  name: string;
  title?: string;
  avatarUrl?: string; // Optional avatar URL
}

const userID = 1;

export async function getProfile(): Promise<Profile> {
  // Simulate loading for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  const user = USERS.find((user) => user.id == userID);
  if (!user) {
    throw new Error("User not found");
  }

  const initials = user.name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();

  // Return profile data
  return {
    initials,
    name: user.name,
    title: user.title,
    avatarUrl: user.avatar_url,
  };
}