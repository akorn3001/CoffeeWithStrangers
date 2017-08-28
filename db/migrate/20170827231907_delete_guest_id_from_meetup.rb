class DeleteGuestIdFromMeetup < ActiveRecord::Migration[5.1]
  def change
    remove_column :meetups, :guest_id
  end
end
