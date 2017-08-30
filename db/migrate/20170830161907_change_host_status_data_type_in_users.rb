class ChangeHostStatusDataTypeInUsers < ActiveRecord::Migration[5.1]
  def up
    change_column :users, :host_status, :string
  end

  def down
    change_column :users, :host_status, :boolean
  end
end
