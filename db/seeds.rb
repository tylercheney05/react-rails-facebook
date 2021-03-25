5.times do
  profile = Profile.create(
    name: Faker::Superhero.name
  )
  3.times do
    Post.create(
      title: Faker::Games::SuperMario.game,
      body: Faker::Lorem.sentences,
      profile_id: profile.id
    )
  end
end
puts "Data Seeded"

# 5.times do
#   blog = Blog.create(
#     title: Faker::DcComics.villain,
#     cat: cats.sample
#   )
#   3.times do
#     Post.create(
#       title: Faker::DcComics.title,
#       body: Faker::Lorem.paragraph,
#       author: Faker::DcComics.hero,
#       blog_id: blog.id
#     )
#   end
# end
# puts 'Data has been seeded'
