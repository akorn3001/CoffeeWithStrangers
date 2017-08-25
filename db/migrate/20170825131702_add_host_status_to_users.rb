class AddHostStatusToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :host_status, :boolean, :default => false
  end
end
