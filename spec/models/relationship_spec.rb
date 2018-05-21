require 'rails_helper'

RSpec.describe Relationship, type: :model do
  it { should belong_to(:follower) }
  it { should belong_to(:followed_user) }

end
