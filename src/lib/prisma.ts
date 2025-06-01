import { PrismaClient } from "../generated/prisma";

// PrismaClientのグローバルインスタンスを作成
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// 開発環境では接続プールを再利用するためにグローバル変数を使用
export const prisma = globalForPrisma.prisma ??
    new PrismaClient({
        log: ["query"],
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// todays_studyを追加する関数
export async function createTodaysStudy(content: string) {
    try {
        const newStudy = await prisma.todays_study.create({
            data: {
                id: crypto.randomUUID(),
                content: content,
            },
        });
        return newStudy;
    } catch (error) {
        console.error("Error creating todays_study:", error);
        throw error;
    }
}

// todays_studyを取得する関数（今日の分のみ）
export async function getTodaysStudies() {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const studies = await prisma.todays_study.findMany({
            where: {
                createdAt: {
                    gte: today,
                    lt: tomorrow,
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return studies;
    } catch (error) {
        console.error("Error fetching todays studies:", error);
        throw error;
    }
}

// 全てのtodays_studyを取得する関数
export async function getAllTodaysStudies() {
    try {
        const studies = await prisma.todays_study.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return studies;
    } catch (error) {
        console.error("Error fetching all todays studies:", error);
        throw error;
    }
}

// 特定のtodays_studyを削除する関数
export async function deleteTodaysStudy(id: string) {
    try {
        const deletedStudy = await prisma.todays_study.delete({
            where: {
                id: id,
            },
        });
        return deletedStudy;
    } catch (error) {
        console.error("Error deleting todays_study:", error);
        throw error;
    }
}

// 特定のtodays_studyを更新する関数
export async function updateTodaysStudy(id: string, content: string) {
    try {
        const updatedStudy = await prisma.todays_study.update({
            where: {
                id: id,
            },
            data: {
                content: content,
            },
        });
        return updatedStudy;
    } catch (error) {
        console.error("Error updating todays_study:", error);
        throw error;
    }
}

// データベース接続を閉じる関数
export async function disconnectPrisma() {
    await prisma.$disconnect();
}
