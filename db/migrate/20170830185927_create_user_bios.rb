class CreateUserBios < ActiveRecord::Migration[5.1]
  def change
    create_table :user_bios do |t|
      t.text :description, null: false
      t.text :background, null: false
      t.text :topics, null: false
      t.string :tagline, null: false
      
      t.timestamps
    end
  end
end
