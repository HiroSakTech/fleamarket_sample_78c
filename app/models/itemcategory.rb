class Itemcategory < ApplicationRecord
  has_many :items
  validates :name, presence: true
  has_ancestry
end
