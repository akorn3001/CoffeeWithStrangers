class DeleteColumnFromMeetups < ActiveRecord::Migration[5.1]
  def change
    remove_column :meetups, :remaining_spots
  end
end
