import { use } from "react";
import prisma from "../libs/prismadb";
import { startOfDay } from "date-fns";

interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getReservation(params:IParams) {
    try {
        const { listingId, userId, authorId } = params;

        const query: any = {};

        if (listingId) {
            query.listingId = listingId;
        }

        if (userId) {
            query.userId = userId;
        }

        if (authorId) {
            query.authorId = authorId;
        }

        const reservations = await prisma.reservation.findMany({
            where: query,
            include: {
                listing: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const safeReservation = reservations.map(
            (reservations) => ({
                ...reservations,
                createdAt: reservations.createdAt.toISOString(),
                startDate: reservations.startDate.toISOString(),
                endDate: reservations.endDate.toISOString(),
                listing: {
                    ...reservations.listing,
                    createdAt: reservations.listing.createdAt.toISOString()
                }
            })
        )

        return safeReservation;
    }
    catch (error: any) {
        throw new Error(error);
    }
}