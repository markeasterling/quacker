FactoryBot.define do
  factory :user do 
    name { Faker::Name.name }
    email 'user@quacker.com'
    password 'iloveducks'
  end
end