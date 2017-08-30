class AddNotNullConstraintToUserId < ActiveRecord::Migration[5.1]
  def change
    change_column :user_bios, :user_id, :integer, null: false
  end
end
