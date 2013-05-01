class TodoItem < ActiveRecord::Base
  attr_accessible :completed, :deleted, :due_at, :name
end
