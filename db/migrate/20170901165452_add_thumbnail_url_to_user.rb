class AddThumbnailUrlToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :thumbnail, :text
  end
end
