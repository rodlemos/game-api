/*
  Warnings:

  - You are about to drop the column `id_guide` on the `ItemsOnGuides` table. All the data in the column will be lost.
  - You are about to drop the column `id_item` on the `ItemsOnGuides` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ItemsOnGuides" DROP CONSTRAINT "ItemsOnGuides_id_guide_fkey";

-- DropForeignKey
ALTER TABLE "ItemsOnGuides" DROP CONSTRAINT "ItemsOnGuides_id_item_fkey";

-- AlterTable
ALTER TABLE "ItemsOnGuides" DROP COLUMN "id_guide",
DROP COLUMN "id_item",
ADD COLUMN     "id_guides" TEXT,
ADD COLUMN     "id_items" TEXT;

-- AddForeignKey
ALTER TABLE "ItemsOnGuides" ADD CONSTRAINT "ItemsOnGuides_id_items_fkey" FOREIGN KEY ("id_items") REFERENCES "items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemsOnGuides" ADD CONSTRAINT "ItemsOnGuides_id_guides_fkey" FOREIGN KEY ("id_guides") REFERENCES "guides"("id") ON DELETE SET NULL ON UPDATE CASCADE;
