class CreateDispensaries < ActiveRecord::Migration[5.2]
  def change
    create_table :dispensaries do |t|
      t.string :name, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.text :description
      t.string :contact
      t.integer :rating
    end
  end
end
