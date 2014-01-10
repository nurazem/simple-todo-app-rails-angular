class TaskListsController < ApplicationController

    before_action :set_task_list, only: [:show, :edit, :update, :destroy]
    before_filter :authenticate_user!

    # GET /task_lists
    def index
      render json: current_user.task_lists
    end

    # GET /task_lists/1
    def show
      render json: @task_list
    end

    # POST /task_lists
    def create
      @task_list = current_user.task_lists.create!(task_list_params)
      render json: @task_list
    end

    private

    def set_task_list
      @task_list ||= TaskList.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def task_list_params
      params.require(:task_list).permit(:name)
    end
end
