set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"accountName" TEXT NOT NULL,
	"password" TEXT NOT NULL,
  "profilePicUrl" text not null,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public"."posts" (
	"postId" serial NOT NULL,
	"userId" integer NOT NULL,
	"description" TEXT NOT NULL,
  "imageUrl" text not null,
	-- "createdAt" timestamptz(6) not null default now()
	CONSTRAINT "posts_pk" PRIMARY KEY ("postId")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public"."savedPosts" (
	"userId" integer NOT NULL,
	"savedPostId" serial NOT NULL,
	CONSTRAINT "savedPosts_pk" PRIMARY KEY ("userId","savedPostId")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public"."tags" (
	"tagId" serial NOT NULL,
	"tag" TEXT NOT NULL,
	CONSTRAINT "Tags_pk" PRIMARY KEY ("tagId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."postTags" (
	"postTagId" integer NOT NULL,
	"postId" integer NOT NULL,
	CONSTRAINT "postTags_pk" PRIMARY KEY ("postTagId")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public"."postComments" (
	"postCommentId" serial NOT NULL,
	"postId" integer NOT NULL,
	"comment" TEXT NOT NULL,
	"userId" integer not null,
	CONSTRAINT "postComments_pk" PRIMARY KEY ("postCommentId","userId")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "public"."postLikes" (
	"postLikeId" serial NOT NULL,
	"postId" integer NOT NULL,
	"liked" BOOLEAN NOT NULL,
	"userId" integer not null,
	CONSTRAINT "postLikes_pk" PRIMARY KEY ("postLikeId","userId")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "posts" ADD CONSTRAINT "posts_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "savedPosts" ADD CONSTRAINT "savedPosts_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "savedPosts" ADD CONSTRAINT "savedPosts_fk1" FOREIGN KEY ("savedPostId") REFERENCES "posts"("postId");

ALTER TABLE "postTags" ADD CONSTRAINT "postTags_fk0" FOREIGN KEY ("postTagId") REFERENCES "tags"("tagId");
ALTER TABLE "postTags" ADD CONSTRAINT "postTags_fk1" FOREIGN KEY ("postId") REFERENCES "posts"("postId");

ALTER TABLE "postComments" ADD CONSTRAINT "postComments_fk0" FOREIGN KEY ("postId") REFERENCES "posts"("postId");
alter table "postComments" add constraint "postComments_fk1" foreign key ("userId") references "users"("userId");

ALTER TABLE "postLikes" ADD CONSTRAINT "postLikes_fk0" FOREIGN KEY ("postId") REFERENCES "posts"("postId");
alter table "postLikes" add constraint "postLikes_fk1" foreign key ("userId") references "users"("userId");
