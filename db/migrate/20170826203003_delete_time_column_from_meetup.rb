class DeleteTimeColumnFromMeetup < ActiveRecord::Migration[5.1]
  def change
    remove_column :meetups, :time
  end
end
