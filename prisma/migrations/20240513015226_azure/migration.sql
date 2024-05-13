/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Evento` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Evento_name_key" ON "Evento"("name");
