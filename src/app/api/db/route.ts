import { updateTodaysStudy } from "@/lib/prisma";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const content = url.searchParams.get("content");
    if (!content) {
        return new Response("Content parameter is required", { status: 400 });
    }
    await updateTodaysStudy("0", content)
        .then(() => {
            return new Response("Today's study updated successfully", {
                status: 200,
            });
        })
        .catch((error) => {
            console.error("Error updating today's study:", error);
            return new Response("Failed to update today's study", {
                status: 500,
            });
        });
    return new Response("Updating today's study...", { status: 202 });
}
