import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions);

    if (session) {
      res.status(200).json({
        content: "This is protected content",
      });
    } else {
      res.status(401).json({
        error: "You must be signed in",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
    });
  }
}
