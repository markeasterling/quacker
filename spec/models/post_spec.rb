require 'rails_helper'

RSpec.describe Post, type: :model do
  it { should validate_presence_of(:content) }
  it { should validate_length_of(:content).is_at_most(140) }
end
