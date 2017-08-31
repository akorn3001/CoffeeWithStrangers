class RemoveDefaultValuesFromUserBioColumns < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:users, :description, nil)
    change_column_default(:users, :background, nil)
    change_column_default(:users, :topics, nil)
    change_column_default(:users, :tagline, nil)
  end
end
