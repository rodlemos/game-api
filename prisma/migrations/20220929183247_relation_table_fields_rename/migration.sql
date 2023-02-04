/*
  Warnings:

  - You are about to drop the column `id_guides` on the `ItemsOnGuides` table. All the data in the column will be lost.
  - You are about to drop the column `id_items` on the `ItemsOnGuides` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemsOnGuides" DROP CONSTRAINT "ItemsOnGuides_id_guides_fkey";

-- DropForeignKey
ALTER TABLE "ItemsOnGuides" DROP CONSTRAINT "ItemsOnGuides_id_items_fkey";

-- AlterTable
ALTER TABLE "ItemsOnGuides" DROP COLUMN "id_guides",
DROP COLUMN "id_items",
ADD COLUMN     "id_guide" TEXT,
ADD COLUMN     "id_item" TEXT;

-- AddForeignKey
ALTER TABLE "ItemsOnGuides" ADD CONSTRAINT "ItemsOnGuides_id_item_fkey" FOREIGN KEY ("id_item") REFERENCES "items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemsOnGuides" ADD CONSTRAINT "ItemsOnGuides_id_guide_fkey" FOREIGN KEY ("id_guide") REFERENCES "guides"("id") ON DELETE SET NULL ON UPDATE CASCADE;
