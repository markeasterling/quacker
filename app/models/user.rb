class User < ApplicationRecord
  validates_presence_of :name, :password_digest
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  
  has_secure_password

  has_many :posts, dependent: :destroy
  has_many :active_relationships, class_name: "Relationship",
                                  foreign_key: "follower_id",
                                  dependent: :destroy
  has_many :passive_relationships, class_name: "Relationship",
                                  foreign_key: "followed_user_id",
                                  dependent: :destroy

  has_many :following, through: :active_relationships,  source: :followed_user
  has_many :followers, through: :passive_relationships, source: :follower                                  


def follow(other_user)
    following << other_user
  end

  
end
