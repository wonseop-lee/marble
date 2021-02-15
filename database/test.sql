    select "p"."postId",
           "p"."userId",
           "p"."description",
           "p"."imageUrl",
           "u"."accountName" as "poster",
           "u"."profilePicUrl"
          --  "pc"."postCommentId",
          --  "pc"."postId",
          --  "pc"."comment",
          --  "pc"."userId" as "commenter"
    from "posts" as "p"
    join "users" as "u" using ("userId")
    -- join "postComments" as "pc" using ("postId")
