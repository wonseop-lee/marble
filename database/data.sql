insert into "users" (
  "accountName",
  "password",
  "profilePicUrl"
) values (
  'pikachu025',
  'pw025',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
), (
  '7squirtle7',
  'pw007',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
);

insert into "posts" (
  "userId",
  "description",
  "imageUrl"
) values (
  1,
  'My first post!',
  '/images/detective.jpg'
), (
  1,
  'Trip to forest last summer',
  '/images/forest.jpg'
), (
  2,
  'WATER GOOD WATER NICE',
  '/images/river.jpeg'
), (
  2,
  'Family portrait',
  '/images/squirtlefam.jpg'
), (
  1,
  'Downtown yay!',
  '/images/detecpicity.jpg'
), (
  1,
  'He gon die LOL',
  '/images/squirtchu.png'
), (
  1,
  'You know I could write a longer caption, but whoa..',
  '/images/whoa.png'
), (
  1,
  'lmao',
  '/images/battery.jpg'
), (
  1,
  'BlizzConline 2021! Feb 19-20, FREE ADMISSION',
  '/images/blizzconline.jpg'
), (
  1,
  'new app who this',
  '/images/pikaself.jpg'
);


-- insert into "postComments" (
--   "postId",
--   "comment",
--   "userId"
-- ) values (
--   1,
--   'Nice pic kachu',
--   2
-- ), (
--   1,
--   'ty ty :)',
--   1
-- );
