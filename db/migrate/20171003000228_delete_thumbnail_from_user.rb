class DeleteThumbnailFromUser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :thumbnail
  end
end
