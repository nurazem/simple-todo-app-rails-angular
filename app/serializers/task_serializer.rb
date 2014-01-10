class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :priority, :completed
end
