class CreateAttendances < ActiveRecord::Migration[5.1]
  def change
    create_table :attendances do |t|
      t.integer :meetup_id, null: false
      t.integer :attendee_id, null: false

      t.timestamps
    end
  end
end
