"use server";
import { db } from "@/lib/db";
import { compareSync } from "bcrypt-ts";

export default async function getUser(credentials: { email: string; password: string }) {
  const user = await db.user.findUnique({
    where: { email: credentials.email }
  });

  if (!user) return null;
  
  const passwordMatch = compareSync(credentials.password, user.password);
  if (!passwordMatch) return null;

  return {
    id: user.id.toString(),
    email: user.email,
    name: user.name,
    createdAt: user.createdAt
  };
}