import "server-only";

import { auth } from "./auth";
import { redirect } from "next/navigation";
import prisma from "./db";
import { Pet, User } from "@prisma/client";

export async function checkAuth() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  return session;
}

export async function getPetById(petId: Pet["id"]) {
  try {
    const pet = await prisma?.pet.findUnique({
      where: {
        id: petId,
      },
    });
    return pet;
  } catch (error) {
    console.error(error);
  }
}

export async function getPetByUserId(userId: User["id"]) {
  const pets = await prisma?.pet.findMany({
    where: {
      userId,
    },
  });
  return pets;
}

export async function getUserByEmail(email: User["email"]) {
  try {
    const user = await prisma?.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
}
