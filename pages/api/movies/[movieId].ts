import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {

        if (req.method !== "GET") {
            return res.status(405).end();
        }

        await serverAuth(req);

        const { movieId } = req.query;

        if (typeof movieId !== "string") {
            throw new Error("Invalid ID");
        }

        if (!movieId) {
            throw new Error("Missing ID");
        }

        const movies = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        });

        if (!movies) {
            throw new Error("Invalid ID");
        }

        return res.status(200).json(movies);

    } catch (error) {

        console.log(error);

        return res.status(500).end();

    }
    
};