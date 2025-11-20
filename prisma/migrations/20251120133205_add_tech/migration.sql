-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'User';

-- CreateTable
CREATE TABLE "TechStacks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TechStacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectsToTechStacks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjectsToTechStacks_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "TechStacks_name_key" ON "TechStacks"("name");

-- CreateIndex
CREATE INDEX "_ProjectsToTechStacks_B_index" ON "_ProjectsToTechStacks"("B");

-- AddForeignKey
ALTER TABLE "_ProjectsToTechStacks" ADD CONSTRAINT "_ProjectsToTechStacks_A_fkey" FOREIGN KEY ("A") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToTechStacks" ADD CONSTRAINT "_ProjectsToTechStacks_B_fkey" FOREIGN KEY ("B") REFERENCES "TechStacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
