class AddColumnToMeetups < ActiveRecord::Migration[5.1]
  def change
    add_column :meetups, :remaining_spots, :integer, :default => 6
  end
end
