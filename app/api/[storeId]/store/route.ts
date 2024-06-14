import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET (
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    
    // Check if user is authenticated
    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 401 });
    }

    // Validate the storeId
    if (!params.storeId) {
      return new NextResponse('Store id is required', { status: 400 });
    }

    // Fetch the store name from the database
    const store = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId, // Ensure that the store belongs to the authenticated user
      },
      select: {
        name: true, // Only fetch the store's name
      },
    });

    // Handle case where store is not found
    if (!store) {
      return new NextResponse('Store not found or not authorized', { status: 404 });
    }

    // Return the store's name
    return NextResponse.json({ name: store.name });
  } catch (error) {
    console.error('[STORE_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
};
