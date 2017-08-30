class AddUserIdToUserBio < ActiveRecord::Migration[5.1]
  def change
    add_column :user_bios, :user_id, :integer
  end
end
