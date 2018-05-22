FactoryBot.define do
  factory :user do 
    name { Faker::Name.name }
    email 'user@quacker.com'
    password 'ducksarecool'
    password_confirmation 'ducksarecool'
  end
end