class Api::ProfilesController < ApplicationController
    def index
        render json: Profile.all
    end
end
