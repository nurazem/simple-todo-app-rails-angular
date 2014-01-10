class Task < ActiveRecord::Base
  belongs_to :task_list
  after_initialize :default_values

  def default_values
    self.completed ||= false
    self.priority ||= 2
  end

end
