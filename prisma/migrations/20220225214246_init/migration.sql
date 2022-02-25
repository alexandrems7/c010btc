-- CreateTable
CREATE TABLE "Bola" (
    "id" TEXT NOT NULL,
    "bola" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cartela" (
    "id" TEXT NOT NULL,
    "cartela" SERIAL NOT NULL,
    "numerosDaCartela" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cartela_pkey" PRIMARY KEY ("id")
);
