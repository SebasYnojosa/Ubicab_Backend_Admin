-- CreateTable
CREATE TABLE "Administrador" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date_inicio" TIMESTAMP(3) NOT NULL,
    "date_fin" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "administrador_id" INTEGER NOT NULL,
    "lugar_id" INTEGER NOT NULL,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lugar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "disponible" BOOLEAN NOT NULL,

    CONSTRAINT "Lugar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Administrador_email_key" ON "Administrador"("email");

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_administrador_id_fkey" FOREIGN KEY ("administrador_id") REFERENCES "Administrador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_lugar_id_fkey" FOREIGN KEY ("lugar_id") REFERENCES "Lugar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
