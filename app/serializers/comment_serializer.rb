class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :recipe_id, :content
  has_one :user
  has_one :recipe
end
