/*
  Warnings:

  - You are about to drop the column `id_guide` on the `items` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemsOnGuides" DROP CONSTRAINT "ItemsOnGuides_id_guides_fkey";

-- DropForeignKey
ALTER TABLE "ItemsOnGuides" DROP CONSTRAINT "ItemsOnGuides_id_items_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "id_guide";

-- AddForeignKey
ALTER TABLE "ItemsOnGuides" ADD CONSTRAINT "ItemsOnGuides_id_items_fkey" FOREIGN KEY ("id_items") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemsOnGuides" ADD CONSTRAINT "ItemsOnGuides_id_guides_fkey" FOREIGN KEY ("id_guides") REFERENCES "guides"("id") ON DELETE CASCADE ON UPDATE CASCADE;
