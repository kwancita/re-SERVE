class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :cuisine, :menu, :image
end
