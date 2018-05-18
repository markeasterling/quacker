class Post < ApplicationRecord
  belongs_to :user
  validates_presence_of :content
  validates_length_of :content, :maximum => 140
end
