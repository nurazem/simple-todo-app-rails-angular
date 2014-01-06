class TaskListsController < ApplicationController

    before_action :set_task_list, only: [:show, :edit, :update, :destroy]

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

    # PUT or PATCH /task_lists
    def update
      @task_list.update_attributes(task_list_params)
      head :no_content
    end

    # DELETE /task_lists/1
    def destroy
      @task_list.destroy
      head :no_content
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
