class Api::DispensariesController < ApplicationController

    def index
        @dispensaries = Dispensary.all
    end

    def create
        @dispensary = Dispensary.new(dispenary_params)

        if @dispenary.save
            render 'api/dispensaries/:id'
        else
            render json @dispenary.errors.full_messages
    end

    private
    def dispenary_params
        params.require(:dispensary).permit(:name, :latitude, :longitude, :description, :contact, :rating)
    end
end