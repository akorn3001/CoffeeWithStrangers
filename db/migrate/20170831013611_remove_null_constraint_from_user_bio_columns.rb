class RemoveNullConstraintFromUserBioColumns < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :description, :text, :null => true
    change_column :users, :background, :text, :null => true
    change_column :users, :topics, :text, :null => true
    change_column :users, :tagline, :string, :null => true
  end
end
