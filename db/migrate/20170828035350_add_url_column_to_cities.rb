class AddUrlColumnToCities < ActiveRecord::Migration[5.1]
  def change
    add_column :cities, :url, :text
  end
end
