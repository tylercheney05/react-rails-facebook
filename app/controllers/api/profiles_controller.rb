class Api::ProfilesController < ApplicationController
    before_action :set_profile, only: [:update, :show, :destroy]

    def index
        render json: Profile.all
    end

    def show
        render json: @profile
    end

    def create
        @profile = Profile.new(profile_params)
        if @profile.save
            render json: @profile
        else
            render json: { errors: @profile.error },
            status: :unprocessable_entity
        end
    end

    def update
        if @profile.update(profile_params)
            render json: @profile
        else
            render json: { errors: @profile.error },
            status: :unprocessable_entity
        end
    end

    def destroy
        @profile.destroy
        render json: { message: 'Profile was Deleted' }
    end

    private
       def set_profile
            @profile = Profile.find(params[:id])
       end
       
        def profile_params
            params.require(:profile).permit(:name)
        end
end
