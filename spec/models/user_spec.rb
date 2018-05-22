require 'rails_helper'

RSpec.describe User, type: :model do

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_uniqueness_of(:email).ignoring_case_sensitivity }
  it { should validate_presence_of(:password_digest) }

  it { should have_many(:posts) }
  it { should have_many(:active_relationships) }
  it { should have_many(:passive_relationships) }
  it { should have_many(:following).through(:active_relationships) }
  it { should have_many(:followers).through(:passive_relationships) }

end
