class Dispensary < ApplicationRecord
    validates :name, :latitude, :longitude, presence: true
    
end