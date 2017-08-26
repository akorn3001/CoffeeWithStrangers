class AddGuestColumnToMeetups < ActiveRecord::Migration[5.1]
  def change
    add_column :meetups, :guest_id, :integer
  end
end
