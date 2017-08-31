class AddColumnsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :description, :text, null: false, :default => ""
    add_column :users, :background, :text, null: false, :default => ""
    add_column :users, :topics, :text, null: false, :default => ""
    add_column :users, :tagline, :string, null: false, :default => ""
  end
end
