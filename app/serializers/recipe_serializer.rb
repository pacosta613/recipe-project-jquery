class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  has_many :ingredients #not sure yet
end
