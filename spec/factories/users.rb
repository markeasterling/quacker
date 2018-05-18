FactoryBot.define do
  factory :user do 
    name { Faker::Name.name }
    email 'dale@dalesducks.com'
    password 'iloveducks'
  end
end