class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :recipe_id, :content, :user
  has_one :user
  has_one :recipe
end
