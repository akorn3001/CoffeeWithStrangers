class ChangeDateColumnInMeetup < ActiveRecord::Migration[5.1]
  def up
    change_column :meetups, :date, :datetime
  end

  def down
    change_column :meetups, :date, :date
  end
end
