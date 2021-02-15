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
), (
  1,
  'Downtown yay!',
  'https://cdn.hiptoro.com/wp-content/uploads/2020/02/Detective-Pikachu-2-Release-Date-Updates-Is-the-Pokemon-Sequel-Movie-Happening-Soon.jpg'
), (
  1,
  'He gon die LOL',
  'https://dreager1.files.wordpress.com/2012/07/tumblr_ljgmjcntsr1qibjh5o1_500.png'
), (
  1,
  'Dad works here',
  'https://lh3.googleusercontent.com/proxy/xYwLXHnunoo00u8rhdaKxx_rMEzXa8JD9CV1Mhi4lIIjSRLo0RWEPT7AtQH7lAi5YidYJg6twe1XafeTpOt3E_vrw7At-aTZA4IZPhTNvxOwLZGLnZiZdCRpGxZ0Qet790kvQ_dWF25EtA'
), (
  1,
  'You know I could write a longer caption, but whoa..',
  'https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png'
), (
  1,
  'lmao',
  'https://tekshanghai.com/wp-content/uploads/2019/02/tingtip23_lowpowerwarn.jpg'
), (
  1,
  'BlizzConline 2021!
   Feb 19-20, FREE ADMISSION',
  'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/8s/8SU4GAAJTG6E1600388168802.jpg'
), (
  1,
  'Happy V Day my love <3',
  'https://previews.123rf.com/images/koltukovalek/koltukovalek1712/koltukovalek171200046/92297205-lettering-happy-valentines-day-banner-black-valentines-day-greeting-card-template-with-typography-te.jpg'
), (
  1,
  'new app who this',
  'https://i.kym-cdn.com/photos/images/original/001/205/608/1e5.jpg'
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
