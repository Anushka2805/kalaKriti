/*
  Warnings:

  - Made the column `buyerName` on table `Negotiation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `productName` on table `Negotiation` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Negotiation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "conversationId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "buyerName" TEXT NOT NULL,
    "offerAmount" INTEGER NOT NULL,
    "counterAmount" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Negotiation_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Negotiation" ("buyerName", "conversationId", "counterAmount", "createdAt", "id", "offerAmount", "productName", "status") SELECT "buyerName", "conversationId", "counterAmount", "createdAt", "id", "offerAmount", "productName", "status" FROM "Negotiation";
DROP TABLE "Negotiation";
ALTER TABLE "new_Negotiation" RENAME TO "Negotiation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
