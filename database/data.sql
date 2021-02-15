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
  'https://www.whats-on-netflix.com/wp-content/uploads/2019/05/Pokemon-Detective-Pikachu-Netflix.jpg'
), (
  1,
  'Trip to forest last summer',
  'https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?k=6&m=901134626&s=612x612&w=0&h=IGgBDObQSrfeFOGCNiuRvJwYSLndFZPwsdivtmpj008='
), (
  2,
  'WATER GOOD WATER NICE',
  'https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
), (
  2,
  'Family portrait',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c8e0aba7-7bf2-47ad-9df0-e61e49dcfa87/ddwzuhw-d945ff80-b335-4a97-9f8e-46ecfdc39aa5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzhlMGFiYTctN2JmMi00N2FkLTlkZjAtZTYxZTQ5ZGNmYTg3XC9kZHd6dWh3LWQ5NDVmZjgwLWIzMzUtNGE5Ny05ZjhlLTQ2ZWNmZGMzOWFhNS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZhJz_Lbf9BKLrofl-yyBkuwzdCwZvaEKIhUekmv0lck'
);

insert into "postComments" (
  "postId",
  "comment",
  "userId"
) values (
  1,
  'Nice pic kachu',
  2
), (
  1,
  'ty ty :)',
  1
);
