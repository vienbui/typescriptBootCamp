CREATE TABLE "Course" (
    id INTEGER PRIMARY KEY,
    "seqNo" INTEGER NOT NULL,
    title TEXT NOT NULL,
    "iconUrl" TEXT,
    "longDescription" TEXT,
    category TEXT,
    "createdAt" TIMESTAMPTZ DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE "Lesson" (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    duration TEXT,
    "seqNo" INTEGER NOT NULL,
    "courseId" INTEGER REFERENCES "Course"(id) ON DELETE CASCADE,
    "createdAt" TIMESTAMPTZ DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ DEFAULT NOW()
);
