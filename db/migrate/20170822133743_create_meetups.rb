class CreateMeetups < ActiveRecord::Migration[5.1]
  def change
    create_table :meetups do |t|
      t.date :date, null: false
      t.time :time, null: false
      t.string :address, null: false
      t.integer :city_id, null: false
      t.integer :host_id, null: false

      t.timestamps
    end
  end
end
