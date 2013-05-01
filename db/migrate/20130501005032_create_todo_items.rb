class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :name
      t.datetime :due_at
      t.boolean :completed
      t.boolean :deleted

      t.timestamps
    end
  end
end
