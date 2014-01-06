class TasksController < ApplicationController

  before_action :set_task, only: [:edit, :update, :destroy]

  # GET /tasks
  def index
    if params[:task_list_id]
      @task_list = TaskList.find(params[:task_list_id])
      @tasks = @task_list.tasks
    end
    render json: @tasks
  end


  # POST /tasks
  def create
    @task = Task.new(params[:task])

    if @task.save
      render json: @task, status: :created, location: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    @task = Task.find(params[:id])

    if @task.update(params[:task])
      head :no_content
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task = Task.find(params[:id])
    @task.destroy

    head :no_content
  end

  private

  def set_task
    @task ||= Task.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def task_list_params
    params.require(:task_list).permit(:name)
  end
end




