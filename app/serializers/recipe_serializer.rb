class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  has_many :ingredients
  has_many :comments
  has_one :user
end
