class AddProfileImageUrlToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :img_url, :text
  end
end
