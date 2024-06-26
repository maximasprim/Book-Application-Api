CREATE TABLE IF NOT EXISTS "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"Author" varchar(20),
	"published_at" timestamp DEFAULT now()
);
