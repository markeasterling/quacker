# create users
10.times do |n|
  name  = Faker::Name.name
  email = "example#{n+1}@ducks.com"
  password = "password"
  User.create!(name: name,
               email: email,
               password: password,
               password_confirmation: password)
end

# create posts for users
users = User.all
10.times do
  users.each {
    |user| user.posts.create!(content: Faker::Lovecraft.sentence)
  }
end

# create following relationships between users
user = users.first
following = users[2..9]
followers = users[2..7]
following.each { |followed_user| user.follow(followed_user) }
followers.each { |follower| follower.follow(user) }


