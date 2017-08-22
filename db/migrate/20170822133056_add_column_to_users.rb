class AddColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :city_id, :integer
  end
end
