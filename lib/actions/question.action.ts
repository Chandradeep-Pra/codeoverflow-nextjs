"use server";

import { connectToDB } from "../mongoose";

export async function createQuestion(params:any) {
  try {
    // need to be connected to db
    connectToDB();
  } catch (errro) {}
}
